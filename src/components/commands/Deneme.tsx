import React, { useState, useEffect } from 'react';
import {
  DenemeWrapper,
  HighlightAlt,
  HighlightSpan,
} from '../styles/Deneme.styled';

const Deneme: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentChar, setCurrentChar] = useState('/');
  const loadingChars = ['/', '-', '\\', '|'];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (loading) {
      let index = 0;

      interval = setInterval(() => {
        setCurrentChar(loadingChars[index]);

        index = (index + 1) % loadingChars.length;
      }, 200); // 0.2 saniye sonra bir sonraki karaktere geçmek için zamanlayıcı kullanıyoruz
    }

    const completionTimer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 saniye sonra yüklenme tamamlandı olarak işareti kapatmak için zamanlayıcı kullanıyoruz

    return () => {
      if (interval) {
        clearInterval(interval); // zamanlayıcıyı temizle
      }
      clearTimeout(completionTimer); // tamamlama zamanlayıcısını temizle
    };
  }, [loading]);

  return (
    <DenemeWrapper data-testid="about">
      {loading ? (
        <div className="loading-container">
          <div className="loading-indicator">
            <span className="loading-char"><HighlightAlt>{currentChar}</HighlightAlt></span>
          </div>
        </div>
      ) : (
        <p>
          <HighlightAlt>Yüklenme tamamlandı.</HighlightAlt>
        </p>
      )}
    </DenemeWrapper>
  );
};

export default Deneme;
