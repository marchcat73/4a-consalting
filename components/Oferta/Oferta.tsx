'use client';
import { useState } from 'react';
import cn from 'classnames';
import { CheckBoxChecked, CheckBoxUnchecked } from '@/assets/icons';
import { OfertaProps } from './Oferta.props';
import styles from './Oferta.module.css';

const Oferta = ({ className, ...props }: OfertaProps) => {
  const [isOferta, setIsOferta] = useState(false);

  return (
    <div className={cn('flex flex-col mt-4', className)} {...props}>
      <label className={cn(styles.oferta, 'custom-checkbox')}>
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
          <CheckBoxUnchecked className="custom-checkbox__icon custom-checkbox__icon--unchecked" />
          <CheckBoxChecked className="custom-checkbox__icon custom-checkbox__icon--checked" />
        </span>
        <span className="custom-checkbox__label">
          Я согласен с{' '}
          <span className="underline">офертой рекуррентных платежей</span> и{' '}
          <span className="underline">Политикой конфиденциальности</span>{' '}
        </span>
      </label>
    </div>
  );
};

export default Oferta;
