import type { JSX } from 'react';
import cn from 'classnames';
import { AppHeader } from '@/components';
import { BaseLayoutProps } from './BaseLayout.props';
import styles from './BaseLayout.module.css';

export default function BaseLayout({
  children,
  ...props
}: BaseLayoutProps): JSX.Element {
  return (
    <>
      <div className={styles.baseLayout} {...props}>
        <AppHeader className={styles.header} />
        <main className={cn(styles.body, 'px-4 pt-5 md:pt-12.5')}>
          {children}
        </main>
      </div>
    </>
  );
}
