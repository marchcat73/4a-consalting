import cn from 'classnames';
import { DiscountProps } from './Discount.props';
import styles from './Discount.module.css';

const Discount = ({ percent, className, ...props }: DiscountProps) => {
  return (
    <div
      className={cn(styles.discount, 'xl:text-[22px]', className)}
      {...props}
    >
      {percent}
    </div>
  );
};

export default Discount;
