'use server';
import cn from 'classnames';
import {
  calculateDiscountPercent,
  formatDiscount,
  hasDiscount,
} from '@/app/lib/discount';
import { Discount } from '@/components';
import { BestTariffProps } from './BestTariff.props';
import styles from './BestTariff.module.css';

const BestTariff = async ({
  bestTariff,
  className,
  ...props
}: BestTariffProps) => {
  const discountPercent = calculateDiscountPercent(
    bestTariff.full_price,
    bestTariff.price,
  );
  const showDiscount = hasDiscount(bestTariff.full_price, bestTariff.price);

  return (
    <div
      className={cn(
        styles.container,
        'pl-5 min-[375px]:pl-7.5 md:pl-30.5 pb-5 pt-5 pr-2.75 min-[375px]:pr-4',
        className,
      )}
      {...props}
    >
      {showDiscount && (
        <Discount
          percent={formatDiscount(discountPercent)}
          className={styles.bestDiscount}
        />
      )}
      <div className={cn(styles.hit, 'min-[375px]:text-[16px] xl:text-[22px]')}>
        хит!
      </div>
      <div
        className={cn(
          'flex flex-col justify-between w-26.75 min-[375px]:w-30.5 md:w-46',
        )}
      >
        <span
          className={cn(
            styles.term,
            'mb-3 min-[375px]:text-[18px] md:text-[26px] xl:text-center',
          )}
        >
          {bestTariff.period}
        </span>
        <span
          className={cn(
            styles.price,
            'text-[30px] min-[375px]:text-[34px] md:text-[50px]',
          )}
        >
          {bestTariff.price} ₽
        </span>
        <span className={cn(styles.oldPrice, 'flex justify-end line-through')}>
          {bestTariff.full_price} ₽
        </span>
      </div>
      <div>
        <span className="text-[14px] md:text-[16px]">{bestTariff.text}</span>
      </div>
    </div>
  );
};

export default BestTariff;
