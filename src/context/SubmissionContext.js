'use client';

/**
 * SubmissionContext stores the last successful demo submission strictly in browser memory.
 * No localStorage, cookies, or remote server requests are used, preserving complete privacy.
 * Client component because in-memory state is maintained across client-side navigations.
 */

import React, { createContext, useContext, useState, useCallback } from 'react';

const SubmissionContext = createContext({
  lastSubmission: null,
  setSubmission: () => {},
  clearSubmission: () => {},
});

/**
 * Provider component for managing demo submission status in memory.
 * @param {{ children: React.ReactNode }} props
 */
export function SubmissionProvider({ children }) {
  // Only non-sensitive summary info (e.g. { serviceLabel: 'Drain Cleaning' }) is stored.
  const [lastSubmission, setLastSubmission] = useState(null);

  const setSubmission = useCallback((submissionData) => {
    setLastSubmission(submissionData);
  }, []);

  const clearSubmission = useCallback(() => {
    setLastSubmission(null);
  }, []);

  return (
    <SubmissionContext.Provider value={{ lastSubmission, setSubmission, clearSubmission }}>
      {children}
    </SubmissionContext.Provider>
  );
}

/**
 * Hook to consume the submission context.
 */
export function useSubmission() {
  return useContext(SubmissionContext);
}
