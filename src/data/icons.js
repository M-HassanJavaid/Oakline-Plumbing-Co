/**
 * All business details and symbols in this project are placeholders that must be
 * verified with a real business owner before reuse.
 *
 * SVG icon paths extracted from the Oakline Plumbing prototype.
 * Rendered using the unified Icon component.
 */

export const ICON_PATHS = {
  drain: '<path d="M4 10h16v2a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-2Z"/><path d="M12 18v3"/><path d="M9 10V6a3 3 0 0 1 6 0"/><circle cx="12" cy="13" r="1.4"/>',
  leak: '<path d="M3 7h9a3 3 0 0 1 3 3v1"/><path d="M3 4v6"/><path d="M15 14.5c0 0-2 2.3-2 3.7a2 2 0 0 0 4 0c0-1.4-2-3.7-2-3.7Z"/>',
  heater: '<rect x="6" y="3" width="12" height="18" rx="3"/><path d="M6 8h12"/><path d="M12 12c-1.2 1.4-1.6 2.3-1.6 3a1.6 1.6 0 0 0 3.2 0c0-.7-.4-1.6-1.6-3Z"/>',
  sewer: '<path d="M3 9h18"/><path d="M3 15h18"/><path d="M7 9v6"/><path d="M17 9v6"/><path d="M12 4v5"/><path d="M12 15v5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  water: '<path d="M2 15c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"/><path d="M2 19c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"/><path d="M12 3s-3 3.4-3 5.5a3 3 0 0 0 6 0C15 6.4 12 3 12 3Z"/>',
  repeat: '<path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 0 1 4-4h12"/><path d="M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 0 1-4 4H4"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  drop: '<path d="M12 3s-6 6.5-6 10.5a6 6 0 0 0 12 0C18 9.5 12 3 12 3Z"/>',
  stain: '<path d="M3 4h18"/><path d="M8 4c0 3 2 3.5 2 6s-2 3-2 5 1.5 3 4 3 4-1 4-3-2-2.5-2-5 2-3 2-6"/>',
  meter: '<circle cx="12" cy="13" r="8"/><path d="M12 13l3.5-3.5"/><path d="M8 3h8"/>',
  flame: '<path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 .3 1.5 1 2.5 2 2.5 0-2.5-.5-5 .5-7.5Z"/>',
  thermo: '<path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0Z"/><path d="M12 11v6"/>',
  sound: '<path d="M4 10v4"/><path d="M8 7v10"/><path d="M12 4v16"/><path d="M16 8v8"/><path d="M20 11v2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18"/><path d="M8 3v4"/><path d="M16 3v4"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3.5 17.3a1.8 1.8 0 0 0 2.5 2.5l5.8-5.8a4 4 0 0 0 5.2-5.4l-2.4 2.4-2.3-.4-.4-2.3 2.4-2.4Z"/>',
  replace: '<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/><path d="M15 3h2a4 4 0 0 1 4 4v2"/><path d="M19 7l2 2 2-2"/><path d="M9 21H7a4 4 0 0 1-4-4v-2"/><path d="M5 17l-2-2-2 2"/>',
  trenchless: '<path d="M2 8h20"/><path d="M5 8v3"/><path d="M19 8v3"/><path d="M4 16h16"/><circle cx="12" cy="16" r="2.2"/><path d="M5 11v5"/><path d="M19 11v5"/>',
  shovel: '<path d="M2 22l6-6"/><path d="M14.5 3.5l6 6-4 4a4.2 4.2 0 0 1-6-6l4-4Z"/><path d="M9.5 14.5L7 12"/>',
  yard: '<path d="M2 20h20"/><path d="M6 20v-5"/><path d="M6 15c-2 0-3-1.5-3-3s1.5-3 3-3 3 1.5 3 3-1 3-3 3Z"/><path d="M14 20v-3c0-1 1-2 2-2h2c1 0 2 1 2 2v3"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/><path d="M8.5 11h7"/><path d="M8.5 14.5h4"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.3 2.3 4.7-5"/>',
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/>',
  phone: '<path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2Z"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  chevDown: '<path d="m6 9 6 6 6-6"/>',
  chevRight: '<path d="m9 6 6 6-6 6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
  alert: '<path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>',
  shield: '<path d="M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17" rx="2.5"/><path d="M9 4V3h6v1"/><path d="M9 11h6"/><path d="M9 15h4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M18 14a6 6 0 0 1 3.5 6"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4V8Z"/><circle cx="12" cy="13" r="3.5"/>',
  quote: '<path d="M7 17c-2 0-3-1.5-3-3.5C4 10 6 7.5 9 6.5l.5 1.5C7.5 9 7 10.2 7 11h2v6H7Z"/><path d="M16 17c-2 0-3-1.5-3-3.5 0-3.5 2-6 5-7l.5 1.5c-2 1-2.5 2.2-2.5 3h2v6h-2Z"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  dollar: '<path d="M12 3v18"/><path d="M16.5 7.5c-.6-1.4-2.4-2.5-4.5-2.5-2.5 0-4.5 1.4-4.5 3.3 0 4.4 9 2.4 9 7 0 1.9-2 3.2-4.5 3.2-2.3 0-4.2-1.1-4.8-2.7"/>',
  tools: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3.5 17.3a1.8 1.8 0 0 0 2.5 2.5l5.8-5.8a4 4 0 0 0 5.2-5.4l-2.4 2.4-2.3-.4-.4-2.3 2.4-2.4Z"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  arrowUpRight: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>'
};
