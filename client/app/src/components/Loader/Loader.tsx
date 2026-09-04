import React, { useEffect, useState } from 'react';
import './Loader.css';

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
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-logo">
          <span className="loader-bracket">&lt;</span>
          <span className="loader-name">PM</span>
          <span className="loader-bracket">/&gt;</span>
        </div>
        <div className="loader-text mono">{text}<span className="cursor">_</span></div>
        <div className="loader-bar-container">
          <div className="loader-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loader-percent mono">{progress}%</div>
        <div className="loader-grid">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="loader-grid-cell" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
