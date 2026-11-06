'use client';

/**
 * ZipChecker component allows Charlotte homeowners to verify service area coverage.
 * Client component because validation, input state, and feedback display run in the browser.
 */

import React, { useState } from 'react';
import { Notice } from '@/components/ui/Notice';
import { Button } from '@/components/ui/Button';
import { CallButton } from '@/components/ui/CallButton';
import { Icon } from '@/components/ui/Icon';
import { SITE } from '@/data/site';

/**
 * Validates a 5-digit US ZIP code.
 * @param {string} val
 * @returns {string} Error message or empty string if valid.
 */
function validateZip(val) {
  if (!val.trim()) {
    return 'Enter your ZIP code so coverage can be checked.';
  }
  if (!/^\d{5}(-\d{4})?$/.test(val.trim())) {
    return 'Enter a 5-digit ZIP code, such as 28213.';
  }
  return '';
}

export function ZipChecker() {
  const [zipValue, setZipValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = zipValue.trim();
    const err = validateZip(trimmed);
    setErrorMsg(err);

    if (err) {
      setResult(null);
      const input = document.getElementById('zip-input');
      input?.focus();
      return;
    }

    const prefix = trimmed.slice(0, 5);
    let tone, title, bodyText;

    if (/^282/.test(prefix)) {
      tone = 'success';
      title = 'In our primary Charlotte service area';
      bodyText =
        `Pathmaker Plumbing regularly dispatches technicians across ${prefix}. Call (704) 733-7507 or submit an online request to schedule service.`;
    } else if (/^280|^281/.test(prefix)) {
      tone = 'success';
      title = 'In our surrounding community service territory';
      bodyText =
        `We service Concord, Huntersville, Matthews, Mint Hill, Pineville, Cornelius, and nearby communities in ${prefix}. Call (704) 733-7507 to confirm same-day availability.`;
    } else if (/^2[78]/.test(prefix)) {
      tone = 'info';
      title = 'Nearby in North Carolina';
      bodyText =
        'This ZIP is near our standard dispatch boundary. Call (704) 733-7507 to check if a technician can be routed to your address.';
    } else {
      tone = 'warn';
      title = 'Outside our service territory';
      bodyText =
        'Pathmaker Plumbing operates exclusively in the greater Charlotte, North Carolina metropolitan area (NC License #31626).';
    }

    setResult({ tone, title, bodyText });
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="h3">Check Your ZIP Code</h3>
        <span className="text-xs font-semibold uppercase tracking-wider text-teal bg-aqua-50 border border-[#B9D3D0] px-2.5 py-1 rounded-md">
          Coverage Lookup
        </span>
      </div>
      <div>
        <label htmlFor="zip-input" className="field-label">
          ZIP code{' '}
          <span className="req-mark" aria-hidden="true">
            *
          </span>
          <span className="sr-only">(required)</span>
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="zip-input"
            name="zip"
            value={zipValue}
            onChange={(e) => {
              setZipValue(e.target.value);
              if (errorMsg) setErrorMsg('');
            }}
            className="field-input sm:flex-1"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={10}
            placeholder="e.g. 28213"
            aria-describedby="zip-hint zip-err"
            aria-invalid={!!errorMsg}
            required
          />
          <button type="submit" className="btn btn-primary">
            Check Coverage
          </button>
        </div>
        <p id="zip-hint" className="field-hint">
          Check if our Charlotte-area plumbing technicians service your neighborhood.
        </p>
        {errorMsg && (
          <p id="zip-err" className="field-error">
            <Icon name="alert" className="w-4 h-4 mt-0.5 flex-none" />
            <span>{errorMsg}</span>
          </p>
        )}
      </div>

      {result && (
        <div role="status" aria-live="polite" className="mt-4">
          <Notice tone={result.tone} title={result.title}>
            <p>{result.bodyText}</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Button label="Request Service" href="/contact" size="sm" />
              <CallButton label="Call (704) 733-7507" size="sm" variant="secondary" />
            </div>
          </Notice>
        </div>
      )}
    </form>
  );
}
