import cn from 'classnames';
import { HeaderTimer } from '@/components';
import { AppHeaderProps } from './AppHeader.props';
import styles from './AppHeader.module.css';

const AppHeader = ({ className, ...props }: AppHeaderProps) => {
  return (
    <header
      className={cn(
        styles.header,
        'flex justify-center items-center py-2',
        className,
      )}
      {...props}
    >
      <div className="flex flex-col justify-between">
        <div className={cn(styles.title)}>Успейте открыть пробную неделю</div>
        <HeaderTimer initialSeconds={120} />
      </div>
    </header>
  );
};

export default AppHeader;
