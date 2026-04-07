'use client';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import { useAppStore } from '@/stores';
import styles from './HeaderTimer.module.css';

const HeaderTimer = ({ initialSeconds = 120 }) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const isBtnClick = useAppStore((state) => state.isBtnClick);

  useEffect(() => {
    // Запускаем интервал только один раз при монтировании
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Очистка при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  // Мигание и красный цвет при остатке ≤ 30 сек (но > 0) или при клике на кнопку
  const isUrgent = (timeLeft <= 30 && timeLeft > 0) || isBtnClick;

  return (
    <div className={styles.box}>
      <div
        className={cn(styles.timer, {
          [styles.urgent]: isUrgent,
        })}
      >
        {`${minutes}:${seconds}`}
      </div>
    </div>
  );
};

export default HeaderTimer;
