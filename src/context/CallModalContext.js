'use client';

/**
 * CallModalContext provides global state to open and close the demo call explanation dialog.
 * Client component because modal state and focus management require browser interactivity.
 */

import React, { createContext, useContext, useState, useRef, useCallback } from 'react';

const CallModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  triggerRef: { current: null },
});

/**
 * Provider component for managing Call Modal visibility and focus return.
 * @param {{ children: React.ReactNode }} props
 */
export function CallModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);

  /**
   * Opens the call modal and saves the element that triggered it to return focus upon closing.
   * @param {HTMLElement} [element] Optional element to return focus to.
   */
  const openModal = useCallback((element = null) => {
    triggerRef.current = element || (typeof document !== 'undefined' ? document.activeElement : null);
    setIsOpen(true);
  }, []);

  /**
   * Closes the call modal and optionally restores focus to the trigger element.
   * @param {boolean} [restoreFocus=true]
   */
  const closeModal = useCallback((restoreFocus = true) => {
    setIsOpen(false);
    if (restoreFocus && triggerRef.current && typeof triggerRef.current.focus === 'function') {
      setTimeout(() => {
        triggerRef.current?.focus();
      }, 30);
    }
  }, []);

  return (
    <CallModalContext.Provider value={{ isOpen, openModal, closeModal, triggerRef }}>
      {children}
    </CallModalContext.Provider>
  );
}

/**
 * Hook to consume the call modal context.
 */
export function useCallModal() {
  return useContext(CallModalContext);
}
