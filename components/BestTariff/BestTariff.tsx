'use client';
import cn from 'classnames';
import {
  calculateDiscountPercent,
  formatDiscount,
  hasDiscount,
} from '@/app/lib/discount';
import { useAppStore } from '@/stores';
import { Discount } from '@/components';
import { BestTariffProps } from './BestTariff.props';
import styles from './BestTariff.module.css';

const BestTariff = ({
  bestTariff,
  isNoBest,
  className,
  ...props
}: BestTariffProps) => {
  const isTimer = useAppStore((state) => state.isTimer);
  const isUrgent = useAppStore((state) => state.isUrgent);

  const discountPercent = calculateDiscountPercent(
    bestTariff.full_price,
    bestTariff.price,
  );
  const showDiscount = hasDiscount(bestTariff.full_price, bestTariff.price);

  return (
    <div
      className={cn(
        styles.container,
        'pl-4 min-[375px]:pl-6.5 pb-5 pt-5 pr-2.75 min-[375px]:pr-4',
        { [styles.nobest]: isNoBest },
        className,
      )}
      {...props}
    >
      {!isTimer && showDiscount && (
        <Discount
          percent={formatDiscount(discountPercent)}
          className={!isNoBest ? styles.bestDiscount : ''}
        />
      )}
      {!isNoBest && (
        <div
          className={cn(styles.hit, 'min-[375px]:text-[16px] xl:text-[22px]')}
        >
          хит!
        </div>
      )}

      <div className={cn('flex flex-col justify-between w-full')}>
        <span
          className={cn(
            styles.term,
            { [styles.nobest]: isNoBest },
            'mb-3 min-[375px]:text-[18px] md:text-[26px] xl:text-center',
          )}
        >
          {bestTariff.period}
        </span>
        <span
          className={cn(
            styles.price,
            {
              [styles.nobest]: isNoBest,
              [styles.urgent]: isUrgent && !isTimer,
            },

            'text-[30px] min-[375px]:text-[34px] md:text-[50px] w-full',
          )}
        >
          {!isTimer ? bestTariff.price : bestTariff.full_price} ₽
        </span>
        {!isTimer && (
          <span
            className={cn(styles.oldPrice, 'flex justify-end line-through')}
          >
            {bestTariff.full_price} ₽
          </span>
        )}
      </div>
      <div className={cn(styles.text, 'flex', { [styles.nobest]: isNoBest })}>
        <span className="text-[14px] md:text-[16px]">{bestTariff.text}</span>
      </div>
    </div>
  );
};

export default BestTariff;
