/**
 * All business details in this file are fictional placeholders for demonstration
 * purposes and must be verified with a real business owner before reuse.
 */

export const SYMPTOMS = [
  { id: 'slow', label: 'Slow or blocked drain', icon: 'drain', service: 'drain-cleaning', note: 'Often a drain cleaning request, especially if one or two fixtures are affected.' },
  { id: 'drip', label: 'Dripping or hidden leak', icon: 'leak', service: 'leak-repair', note: 'Drips, stains, and damp spots usually start with a leak assessment.' },
  { id: 'nohot', label: 'No hot water', icon: 'heater', service: 'water-heaters', note: 'Usually a water heater visit, where repair and replacement can be compared.' },
  { id: 'backup', label: 'Repeated backups', icon: 'sewer', service: 'sewer-lines', note: 'Backups that keep returning, or affect several drains, may involve the sewer line.' },
  { id: 'stain', label: 'Water stain on ceiling', icon: 'stain', service: 'leak-repair', note: 'A stain below a bathroom or kitchen can be a sign of a leak worth assessing.', extended: true },
  { id: 'noise', label: 'Gurgling drains', icon: 'sound', service: 'sewer-lines', note: 'Gurgling when other fixtures run can be a sign of a main line issue.', extended: true },
  { id: 'temp', label: 'Temperature keeps changing', icon: 'thermo', service: 'water-heaters', note: 'Temperature swings are a common reason for a water heater check.', extended: true },
  { id: 'smell', label: 'Drain odor', icon: 'drain', service: 'drain-cleaning', note: 'Odors from a single drain can come from buildup. Several drains may point further down the line.', extended: true }
];
