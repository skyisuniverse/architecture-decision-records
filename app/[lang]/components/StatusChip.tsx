'use client';

import { Chip, ChipProps } from '@mui/material';
import React from 'react';
import type { AdrStatus } from '@/app/[lang]/types/adr';   // ← central import

interface StatusChipProps extends Omit<ChipProps, 'color' | 'label'> {
  status: AdrStatus | string;   // string fallback still useful
  label?: string;
}

const getStatusColor = (status: string): ChipProps['color'] => {
  const colorMap: Record<string, ChipProps['color']> = {
    Draft: 'default',
    Proposed: 'info',
    Rejected: 'error',
    Accepted: 'success',
    Deprecated: 'warning',
    Superseded: 'secondary',
  };
  return colorMap[status] ?? 'default';
};

export const StatusChip: React.FC<StatusChipProps> = ({
  status,
  label,
  variant = 'filled',
  ...chipProps
}) => {
  return (
    <Chip
      label={label ?? status}
      color={getStatusColor(status)}
      variant={variant}
      {...chipProps}
    />
  );
};