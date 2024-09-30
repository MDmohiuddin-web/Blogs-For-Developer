import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900  text-gray-800 dark:text-gray-200 py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Blogs For Developer. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
    );
};

export default Footer;