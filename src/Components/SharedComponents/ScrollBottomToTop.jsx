// import React, { useState, useEffect } from 'react';
// import { animateScroll as scroll } from 'react-scroll';
// import {BsArrowUpCircleFill} from "react-icons/bs";
// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     scroll.scrollToTop();
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <button
//       className={`fixed bottom-28 right-5 p-2 text-3xl cursor-pointer  rounded-lg   z-[1000] text-white awesome-btn awesome-btns ${
//         isVisible ? 'visible' : 'invisible'
//       }`}
//       onClick={scrollToTop}
//     >
//     <BsArrowUpCircleFill/>
//     </button>
//   );
// };

// export default ScrollToTopButton;


import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // Adjust the duration (in milliseconds) for faster scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-28 right-5 p-2 text-3xl cursor-pointer rounded-lg z-[1000] text-white awesome-btn awesome-btns ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
      <BsArrowUpCircleFill />
    </button>
  );
};

export default ScrollToTopButton;
