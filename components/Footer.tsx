// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
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
