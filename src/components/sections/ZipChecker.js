'use client';

/**
 * ZipChecker component allows Charlotte homeowners to verify service area coverage.
 * Client component because validation, input state, and feedback display run in the browser.
 */

import React, { useState } from 'react';
import { DemoTag } from '@/components/ui/DemoTag';
import { Notice } from '@/components/ui/Notice';
import { Button } from '@/components/ui/Button';
import { CallButton } from '@/components/ui/CallButton';
import { Icon } from '@/components/ui/Icon';

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
    return 'Enter a 5-digit ZIP code, such as 28202.';
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
      title = 'This ZIP is in the Charlotte area';
      bodyText =
        'That’s the focus of this concept. Staff would still confirm your exact address before any visit.';
    } else if (/^2[78]/.test(prefix)) {
      tone = 'info';
      title = 'Outside the demo focus';
      bodyText =
        'This North Carolina ZIP isn’t in Charlotte. A live site would check it against the verified coverage list. You could still call or send a request to ask.';
    } else {
      tone = 'warn';
      title = 'Likely outside the area';
      bodyText =
        'This ZIP isn’t in North Carolina. A real Charlotte company would likely not cover it, but you can call to check.';
    }

    setResult({ tone, title, bodyText });
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="h3">Quick ZIP check</h3>
        <DemoTag text="Demo check" />
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
            aria-describedby="zip-hint zip-err"
            aria-invalid={!!errorMsg}
            required
          />
          <button type="submit" className="btn btn-primary">
            Check ZIP
          </button>
        </div>
        <p id="zip-hint" className="field-hint">
          Five digits, for example 28202.
        </p>
        {errorMsg && (
          <p id="zip-err" className="field-error">
            <Icon name="alert" className="w-4 h-4 mt-0.5 flex-none" />
            <span>{errorMsg}</span>
          </p>
        )}
      </div>

      <div aria-live="polite">
        {result && (
          <Notice tone={result.tone} title={result.title}>
            <p>{result.bodyText}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button label="Request service" href="/contact" size="sm" />
              <CallButton size="sm" label="Call to confirm" />
            </div>
            <p className="text-xs text-charcoal-70 mt-3">
              Demo check based on ZIP prefix only.
            </p>
          </Notice>
        )}
      </div>
    </form>
  );
}
