import type { JSX } from 'react';
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
        <main className={styles.body}>{children}</main>
      </div>
    </>
  );
}
