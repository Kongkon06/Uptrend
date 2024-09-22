// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className=" container bg-white-400 text-black h-96 py-4">
      <div className='footer-top mt-28 grid-cols-3 flex gap-10'>
        <ul className='list ml-14'>
          <li><p className='list-title font-bold text-xl'>About us</p></li>
          <li><p className='list-text my-2'>Discover our latest collections and fashion trends.</p></li>
          <li><p className='list-text font-bold mt-4'>+91-8453444981</p></li>
          <li><p className='list-text font-bold'>support@hoodie.com</p></li>
        </ul>
        <ul className='list ml-48'>
          <li><p className='list-title font-bold text-xl '>CustomerService</p></li>
          <li><p className='list-text mt-2'>Return Policy</p></li>
          <li><p className='list-text  mt-2 '>Contact Us</p></li>
          <li><p className='list-text  mt-2'>Shipping Info</p></li>
          <li><p className='list-text  mt-2'>Terms & Conditions</p></li>
          <li><p className='list-text  mt-2'>Privacy Policy</p></li>
        </ul>
        <div className='list ml-64'>
          <p className='newsletter-title font-extrabold text-3xl'>Stay in Fashion</p>
          <p className='newsletter-text mt-4'>Sign up to get the latest updates on new arrivals, exclusive offers, and more.</p>
          <form className='newsletter-form mt-12 bg-grey-100 '>
            <input type='email' name='email_address' placeholder='Enter your email' required className='email-field '></input>
          </form>
        </div>
      </div>
      <div className=" mx-auto text-center mt-56">
        <p>© 2024 UPTREND. All rights reserved.</p>
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
