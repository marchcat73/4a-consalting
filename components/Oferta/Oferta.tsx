'use client';
import { useState } from 'react';
import cn from 'classnames';
import { CheckBoxChecked, CheckBoxUnchecked } from '@/assets/icons';
import { OfertaProps } from './Oferta.props';
import styles from './Oferta.module.css';

const Oferta = ({ className, ...props }: OfertaProps) => {
  const [isOferta, setIsOferta] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={cn('flex flex-col mt-4', className)} {...props}>
      <label className={cn(styles.oferta, 'custom-checkbox mb-4')}>
        <input
          type="checkbox"
          className="custom-checkbox__input"
          id="custom-cb"
          checked={isOferta}
          onChange={() => {
            setIsOferta(!isOferta);
          }}
        />
        <span className="custom-checkbox__visual">
          <CheckBoxUnchecked
            className={cn(
              'custom-checkbox__icon custom-checkbox__icon--unchecked',
              {
                ['error']: !isOferta && isClicked,
              },
            )}
          />
          <CheckBoxChecked className="custom-checkbox__icon custom-checkbox__icon--checked" />
        </span>
        <span className={cn(styles.label, 'custom-checkbox__label')}>
          Я согласен с{' '}
          <span className="underline">офертой рекуррентных платежей</span> и{' '}
          <span className="underline">Политикой конфиденциальности</span>{' '}
        </span>
      </label>
      <button
        className={cn(styles.button, 'flex items-center justify-center')}
        onClick={() => setIsClicked(!isClicked)}
      >
        Купить
      </button>
    </div>
  );
};

export default Oferta;
