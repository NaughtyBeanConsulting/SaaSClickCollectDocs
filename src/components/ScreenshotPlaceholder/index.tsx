import type {ReactNode} from 'react';

import styles from './styles.module.css';

type ScreenshotPlaceholderProps = {
  title: string;
  note?: ReactNode;
  pathHint?: string;
};

export default function ScreenshotPlaceholder({
  title,
  note,
  pathHint,
}: ScreenshotPlaceholderProps) {
  return (
    <div className={styles.frame}>
      <div className={styles.header}>
        <span className={styles.badge}>Screenshot slot</span>
        <strong className={styles.title}>{title}</strong>
      </div>
      <p className={styles.copy}>
        {note ||
          'Authenticated portal capture is still required for this step. Replace this placeholder with the real image when the capture pass is complete.'}
      </p>
      {pathHint ? <code className={styles.path}>{pathHint}</code> : null}
    </div>
  );
}