'use server';
import Image from 'next/image';
import cn from 'classnames';
import { getTariffs } from '@/app/lib/api';
import { BestTariff } from '@/components/BestTariff';
import { HeroProps } from './Hero.props';
import styles from './Hero.module.css';

const Hero = async ({ className, ...props }: HeroProps) => {
  const tariffs = await getTariffs();

  const bestTariff = tariffs.find((t) => t.is_best);
  const lastTariffs = tariffs.filter((t) => !t.is_best).slice(0, 3);
  console.info(lastTariffs.length);

  return (
    <div className={cn('lg:max-w-304', className)} {...props}>
      <h1
        className={cn(
          styles.title,
          'md:text-[40px] mb-6 min-[375px]:mb-6 xl:mb-27.5',
        )}
      >
        Выбери подходящий для себя&nbsp;
        <span className={styles.highlighted}>тариф</span>
      </h1>
      <div className={cn(styles.content)}>
        <div
          className={cn(
            'imageBox max-w-25 mx-auto min-[375px]:max-w-31 xl:max-w-95',
          )}
        >
          <Image
            src="/images/img.png"
            alt="img"
            fill={true}
            quality={100}
            loading="eager"
            className="image"
          />
        </div>
        <div>{bestTariff && <BestTariff bestTariff={bestTariff} />}</div>
      </div>
    </div>
  );
};

export default Hero;
