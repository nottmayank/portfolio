import { useEffect } from 'react';
import Typed from 'typed.js';

function TypingAnimation() {
  useEffect(() => {
    const options = {
      strings: ['Mayank Soni', 'Aspiring Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      backDelay: 4000,
    };

    const typed = new Typed('#typing-element', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span id="typing-element"></span>;
}

export default TypingAnimation;
