import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Tariff } from '@/types';

export interface BestTariffProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  bestTariff: Tariff;
}
