'use client';

/**
 * InquiryForm handles residential plumbing service inquiries with accessible validation.
 * Features:
 * - Full client-side validation matching prototype rules exactly
 * - Focus management to top error summary on validation failure
 * - Error links in summary jump and focus corresponding fields
 * - Post-submit live validation on blur and input
 * - 1.2s simulated asynchronous dispatch with double-submission protection
 * - Simulated failure toggle displaying error notice and retry button
 * - In-memory service preservation to SubmissionContext
 * - Urgent selection triggers warning notice recommending phone call
 * Client component because state, validation, focus, and timer simulation run in the browser.
 */

import React, { useState, useId, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { SERVICE_OPTIONS } from '@/data/services';
import { useSubmission } from '@/context/SubmissionContext';
import { useCallModal } from '@/context/CallModalContext';
import { Notice } from '@/components/ui/Notice';
import { Icon } from '@/components/ui/Icon';

const FIELD_LABELS = {
  name: 'Full name',
  phone: 'Phone',
  zip: 'ZIP code',
  service: 'Service needed',
  email: 'Email',
};

const VALIDATORS = {
  name: (v) =>
    v.trim().length < 2
      ? 'Enter your full name so the team knows who to ask for.'
      : '',
  phone: (v) => {
    if (!v.trim()) return 'Enter a phone number so the team can follow up.';
    if (!/^[\d\s()+.\-]+$/.test(v))
      return 'Use numbers only, with spaces, dashes, or brackets if you like.';
    const digits = v.replace(/\D/g, '');
    return digits.length === 10 || (digits.length === 11 && digits[0] === '1')
      ? ''
      : 'Enter a 10-digit US phone number, such as (704) 555-0123.';
  },
  zip: (v) => {
    if (!v.trim()) return 'Enter your ZIP code so coverage can be checked.';
    return /^\d{5}(-\d{4})?$/.test(v.trim())
      ? ''
      : 'Enter a 5-digit ZIP code, such as 28202.';
  },
  service: (v) =>
    v ? '' : 'Choose the service you need, or pick “Other / Not sure”.',
  email: (v) => {
    if (!v.trim()) return '';
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
      ? ''
      : 'Check the email address, or leave it blank. It’s optional.';
  },
};

/**
 * @param {Object} props
 * @param {'short'|'full'} [props.variant='short']
 * @param {string} [props.preset=''] Preselected service slug from query param.
 * @param {string} [props.heading=''] Form section heading.
 */
export function InquiryForm({
  variant = 'short',
  preset = '',
  heading = '',
}) {
  const formId = useId();
  const router = useRouter();
  const { setSubmission } = useSubmission();
  const { openModal } = useCallModal();
  const summaryRef = useRef(null);

  const isFull = variant === 'full';

  // Form fields state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zip: '',
    service: preset || '',
    description: '',
    urgency: '',
    email: '',
    simulateFailure: false,
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFailed, setSubmissionFailed] = useState(false);

  // Validate a single field if form was already submitted once
  const validateSingleField = (name, value) => {
    if (!VALIDATORS[name]) return '';
    const error = VALIDATORS[name](value);
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (error) {
        next[name] = error;
      } else {
        delete next[name];
      }
      return next;
    });
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    if (hasAttemptedSubmit && VALIDATORS[name]) {
      validateSingleField(name, val);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (hasAttemptedSubmit && VALIDATORS[name]) {
      validateSingleField(name, value);
    }
  };

  const executeSubmit = () => {
    if (isSubmitting) return; // double-submission guard
    setHasAttemptedSubmit(true);
    setSubmissionFailed(false);

    // Validate all fields
    const errors = {};
    Object.keys(VALIDATORS).forEach((key) => {
      if (formData[key] !== undefined) {
        const msg = VALIDATORS[key](formData[key]);
        if (msg) errors[key] = msg;
      }
    });

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setTimeout(() => {
        summaryRef.current?.focus();
      }, 50);
      return;
    }

    setIsSubmitting(true);

    // 1.2 second simulated submission
    setTimeout(() => {
      setIsSubmitting(false);

      if (formData.simulateFailure) {
        setSubmissionFailed(true);
        return;
      }

      // Find human-readable service label for the confirmation screen
      const matchedOpt = SERVICE_OPTIONS.find((o) => o.value === formData.service);
      setSubmission({
        serviceLabel: matchedOpt ? matchedOpt.label : 'service',
      });

      // Clear form
      setFormData({
        name: '',
        phone: '',
        zip: '',
        service: '',
        description: '',
        urgency: '',
        email: '',
        simulateFailure: false,
      });

      router.push('/thank-you');
    }, 1200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeSubmit();
  };

  const errorList = Object.entries(fieldErrors).map(([key, msg]) => ({
    fieldId: `${formId}-${key}`,
    label: FIELD_LABELS[key] || key,
    msg,
  }));

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-labelledby={`${formId}-title`}
      data-inquiry-form
      data-variant={variant}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 id={`${formId}-title`} className="h3 text-[1.3rem]">
          {heading || 'Service request'}
        </h3>
        <span className="text-xs font-semibold uppercase tracking-wider text-teal bg-aqua-50 border border-[#B9D3D0] px-2.5 py-1 rounded-md">
          Online Request
        </span>
      </div>

      <p className="text-sm text-charcoal-70">
        Fields marked <span className="req-mark">*</span> are required.
      </p>

      {/* Error summary */}
      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          className="rounded-2xl border border-[#F4B8B1] bg-[#FEF3F2] p-4 outline-none"
          role="region"
          aria-label="Error summary"
        >
          <p className="font-semibold text-danger flex items-center gap-2">
            <Icon name="alert" className="w-5 h-5 flex-none" />
            <span>
              {errorList.length === 1
                ? 'One field needs attention'
                : `${errorList.length} fields need attention`}
            </span>
          </p>
          <ul className="mt-2 list-disc pl-6 text-[0.95rem] text-charcoal">
            {errorList.map((err) => (
              <li key={err.fieldId}>
                <a
                  href={`#${err.fieldId}`}
                  className="text-link"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(err.fieldId);
                    if (el) {
                      el.focus();
                      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
                    }
                  }}
                >
                  {err.label}: {err.msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-name`} className="field-label">
            Full name{' '}
            <span className="req-mark" aria-hidden="true">
              *
            </span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className="field-input"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? `${formId}-name-err` : undefined}
            required
          />
          {fieldErrors.name && (
            <p id={`${formId}-name-err`} className="field-error">
              <Icon name="alert" className="w-4 h-4 mt-0.5 flex-none" />
              <span>{fieldErrors.name}</span>
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor={`${formId}-phone`} className="field-label">
            Phone{' '}
            <span className="req-mark" aria-hidden="true">
              *
            </span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className="field-input"
            autoComplete="tel"
            inputMode="tel"
            aria-required="true"
            aria-invalid={!!fieldErrors.phone}
            aria-describedby={`${formId}-phone-hint ${
              fieldErrors.phone ? `${formId}-phone-err` : ''
            }`}
            required
          />
          <p id={`${formId}-phone-hint`} className="field-hint">
            Any format works, such as (704) 555-0123.
          </p>
          {fieldErrors.phone && (
            <p id={`${formId}-phone-err`} className="field-error">
              <Icon name="alert" className="w-4 h-4 mt-0.5 flex-none" />
              <span>{fieldErrors.phone}</span>
            </p>
          )}
        </div>

        {/* ZIP code */}
        <div>
          <label htmlFor={`${formId}-zip`} className="field-label">
            ZIP code{' '}
            <span className="req-mark" aria-hidden="true">
              *
            </span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id={`${formId}-zip`}
            name="zip"
            type="text"
            value={formData.zip}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className="field-input"
            autoComplete="postal-code"
            inputMode="numeric"
            aria-required="true"
            aria-invalid={!!fieldErrors.zip}
            aria-describedby={`${formId}-zip-hint ${
              fieldErrors.zip ? `${formId}-zip-err` : ''
            }`}
            required
          />
          <p id={`${formId}-zip-hint`} className="field-hint">
            Used to check coverage first.
          </p>
          {fieldErrors.zip && (
            <p id={`${formId}-zip-err`} className="field-error">
              <Icon name="alert" className="w-4 h-4 mt-0.5 flex-none" />
              <span>{fieldErrors.zip}</span>
            </p>
          )}
        </div>

        {/* Service Needed */}
        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-service`} className="field-label">
            Service needed{' '}
            <span className="req-mark" aria-hidden="true">
              *
            </span>
            <span className="sr-only">(required)</span>
          </label>
          <select
            id={`${formId}-service`}
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className="field-input"
            aria-required="true"
            aria-invalid={!!fieldErrors.service}
            aria-describedby={fieldErrors.service ? `${formId}-service-err` : undefined}
            required
          >
            <option value="">Choose a service</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {fieldErrors.service && (
            <p id={`${formId}-service-err`} className="field-error">
              <Icon name="alert" className="w-4 h-4 mt-0.5 flex-none" />
              <span>{fieldErrors.service}</span>
            </p>
          )}
        </div>

        {/* Description */}
        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-desc`} className="field-label">
            What’s happening?{' '}
            <span className="font-normal text-charcoal-70 text-sm">
              (optional)
            </span>
          </label>
          <textarea
            id={`${formId}-desc`}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="field-input"
            maxLength={800}
            aria-describedby={`${formId}-desc-hint`}
            placeholder="For example: kitchen sink has been slow for a week, and the dishwasher drains slowly too."
          />
          <p id={`${formId}-desc-hint`} className="field-hint">
            Where the problem is, what you’ve noticed, and how long it’s been happening.
          </p>
        </div>

        {/* Full form extra fields */}
        {isFull && (
          <>
            {/* Urgency */}
            <fieldset className="sm:col-span-2">
              <legend className="field-label">
                How urgent is it?{' '}
                <span className="font-normal text-charcoal-70 text-sm">
                  (optional)
                </span>
              </legend>
              <div className="grid sm:grid-cols-3 gap-2.5 mt-1">
                {[
                  ['planned', 'Planning ahead'],
                  ['soon', 'Needs attention soon'],
                  ['urgent', 'Urgent'],
                ].map(([val, lbl]) => (
                  <label key={val} className="radio-pill relative">
                    <input
                      type="radio"
                      name="urgency"
                      value={val}
                      checked={formData.urgency === val}
                      onChange={handleInputChange}
                    />
                    <span>
                      <span className="dot" aria-hidden="true" />
                      {lbl}
                    </span>
                  </label>
                ))}
              </div>
              {formData.urgency === 'urgent' && (
                <div className="mt-3">
                  <Notice tone="warn" title="For urgent problems, please call">
                    Active leaks, backups, or no water are best handled by phone.
                    The form isn’t monitored like a phone line.{' '}
                    <button
                      type="button"
                      className="text-link"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal(e.currentTarget);
                      }}
                    >
                      See the number
                    </button>
                  </Notice>
                </div>
              )}
            </fieldset>

            {/* Email */}
            <div className="sm:col-span-2">
              <label htmlFor={`${formId}-email`} className="field-label">
                Email{' '}
                <span className="font-normal text-charcoal-70 text-sm">
                  (optional)
                </span>
              </label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className="field-input"
                autoComplete="email"
                aria-invalid={!!fieldErrors.email}
                aria-describedby={`${formId}-email-hint ${
                  fieldErrors.email ? `${formId}-email-err` : ''
                }`}
              />
              <p id={`${formId}-email-hint`} className="field-hint">
                Only if you’d like a second way to be reached.
              </p>
              {fieldErrors.email && (
                <p id={`${formId}-email-err`} className="field-error">
                  <Icon name="alert" className="w-4 h-4 mt-0.5 flex-none" />
                  <span>{fieldErrors.email}</span>
                </p>
              )}
            </div>

            {/* Photo upload disabled in demo */}
            <div className="sm:col-span-2">
              <label htmlFor={`${formId}-photo`} className="field-label">
                Photo{' '}
                <span className="font-normal text-charcoal-70 text-sm">
                  (optional, disabled in demo)
                </span>
              </label>
              <input
                id={`${formId}-photo`}
                type="file"
                className="field-input pt-3"
                disabled
                aria-describedby={`${formId}-photo-hint`}
              />
              <p id={`${formId}-photo-hint`} className="field-hint">
                Uploads stay off until secure handling and retention are defined for a real business.
              </p>
            </div>
          </>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
        <button
          type="submit"
          className="btn btn-primary w-full sm:w-auto"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner" aria-hidden="true" />
              <span>Sending request…</span>
            </>
          ) : (
            <span>Send Service Request</span>
          )}
        </button>
        <p className="text-sm text-charcoal-70">
          Prefer to talk?{' '}
          <button
            type="button"
            className="text-link"
            onClick={(e) => {
              e.preventDefault();
              openModal(e.currentTarget);
            }}
          >
            Call instead
          </button>
        </p>
      </div>

      <p className="text-sm text-charcoal-70 flex items-start gap-2">
        <Icon name="lock" className="w-4 h-4 mt-0.5 text-teal flex-none" />
        <span>
          Details are stored securely, used only for your plumbing inquiry, and never shared with third-party marketers. The team will respond promptly during business hours. Read our{' '}
          <Link href="/privacy" className="text-link">
            privacy policy
          </Link>
          .
        </span>
      </p>
    </form>
  );
}
