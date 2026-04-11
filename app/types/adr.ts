export const ADR_STATUSES = [
  'Draft',
  'Proposed',
  'Rejected',
  'Accepted',
  'Deprecated',
  'Superseded',
] as const;

export type AdrStatus = (typeof ADR_STATUSES)[number];

export type ADRItem = {
  title: string;
  date: string;
  link: string;
  status: AdrStatus;
};

export type AdrsList = ADRItem[];