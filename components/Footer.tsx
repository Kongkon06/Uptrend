// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className=" container bg-white-400 text-black h-96 py-4">
      <div className='footer-top mx-auto mt-28'>
        <ul className='list'>
          <li><p className='list-title font-bold my-*'>About us</p></li>
          <li><p className='list-text my-2'>Discover our latest collections and fashion trends.</p></li>
          <li><p className='list-text font-bold'>+91-8453444981</p></li>
          <li><p className='list-text font-bold'>support@hoodie.com</p></li>
        </ul>
        <ul className='list'>

        </ul>
        <ul className='list'></ul>
      </div>
      <div className=" mx-auto text-center mt-56">
        <p>© 2024 Your Company. All rights reserved.</p>
        <p className="mt-2">
          Made with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
          using Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
