'use server';
import cn from 'classnames';
import { BestTariff } from '@/components';
import { TariffsProps } from './Tariffs.props';
import styles from './Tariffs.module.css';

const Tariffs = async ({ tariffs, className, ...props }: TariffsProps) => {
  return (
    <div className={cn(styles.tariffs, className)} {...props}>
      {tariffs &&
        tariffs.length > 0 &&
        tariffs.map((t) => (
          <BestTariff
            key={t.id}
            bestTariff={t}
            isNoBest
            className={cn('mb-1.5 min-[375px]:mb-2 md:mb-3.5')}
          />
        ))}
    </div>
  );
};

export default Tariffs;
