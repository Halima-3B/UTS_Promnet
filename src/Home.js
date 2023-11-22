import React, { useEffect, useState } from 'react';
import './Home.css';
import Aku from './images/aku.jpeg';

const Home = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const originalText = "Halimatussa'diah.";
    let currentIndex = 0;

    const animateText = () => {
      const animationInterval = setInterval(() => {
        setText(originalText.substring(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === originalText.length) {
          clearInterval(animationInterval);

          // Setelah 1 detik, reset teks dan mulai animasi lagi
          setTimeout(() => {
            setText('');
            currentIndex = 0;
            animateText();
          }, 1000);
        }
      }, 100);
    };

    animateText();

    return () => {
      setText('');
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="isi">
          <h2>Welcome to My Website^^</h2>
          <p>{text}</p>
        </div>
        <div className="gambar">
          <img src={Aku} alt="Aku"/>
        </div>
      </div>
    </div>
  );
};

export default Home;