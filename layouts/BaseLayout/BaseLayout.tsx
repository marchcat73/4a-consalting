import type { JSX } from 'react';
import { BaseLayoutProps } from './BaseLayout.props';
import styles from './BaseLayout.module.css';

export default function BaseLayout({
  children,
  ...props
}: BaseLayoutProps): JSX.Element {
  return (
    <>
      <div className={styles.baseLayout} {...props}>
        <header className={styles.header}>header</header>
        <main className={styles.body}>{children}</main>
      </div>
    </>
  );
}
