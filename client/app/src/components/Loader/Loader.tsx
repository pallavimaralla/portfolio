import React, { useEffect, useState } from 'react';
import styles from './Loader.module.css';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const fullText = 'Initializing Portfolio...';

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 60);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => {
      clearInterval(typeInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className={styles["loader-container"]}>
      <div className={styles["loader-content"]}>
        <div className={styles["loader-logo"]}>
          <span className={styles["loader-bracket"]}>&lt;</span>
          <span className={styles["loader-name"]}>PM</span>
          <span className={styles["loader-bracket"]}>/&gt;</span>
        </div>
        <div className="loader-text mono">{text}<span className={styles["cursor"]}>_</span></div>
        <div className={styles["loader-bar-container"]}>
          <div className={styles["loader-bar"]} style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loader-percent mono">{progress}%</div>
        <div className={styles["loader-grid"]}>
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className={styles["loader-grid-cell"]} style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
