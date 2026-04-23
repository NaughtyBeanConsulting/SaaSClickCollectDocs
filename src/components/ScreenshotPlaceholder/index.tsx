import type {ReactNode} from 'react';
import {useEffect, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
  const normalizedPath = pathHint
    ? `/${pathHint.replace(/^static\//, '').replace(/^\/+/, '')}`
    : undefined;
  const screenshotSrc = useBaseUrl(normalizedPath ?? '/');
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    setHasImageError(false);
  }, [normalizedPath]);

  const showImage = Boolean(normalizedPath) && !hasImageError;

  return (
    <div className={styles.frame}>
      <div className={styles.header}>
        <span className={styles.badge}>{showImage ? 'Live screenshot' : 'Screenshot needed'}</span>
        <strong className={styles.title}>{title}</strong>
      </div>
      {showImage ? (
        <div className={styles.imageShell}>
          <img
            alt={title}
            className={styles.image}
            loading="lazy"
            onError={() => setHasImageError(true)}
            src={screenshotSrc}
          />
        </div>
      ) : (
        <div className={styles.fallback}>
          <p className={styles.fallbackTitle}>Authenticated portal capture still needed</p>
          <p className={styles.copy}>
            {note ||
              'Drop the screenshot into the expected static path and this block will render it automatically on the next refresh.'}
          </p>
        </div>
      )}
      {showImage && note ? <p className={styles.copy}>{note}</p> : null}
      {pathHint ? <code className={styles.path}>{pathHint}</code> : null}
    </div>
  );
}