import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <div className="p-10 text-center bg-gray-800 mt-10 text-white">
      <div className="mb-4">
        <p className="text-lg">Created By Jenesh@2024</p>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <Facebook className="text-2xl hover:text-blue-600" />
        </a>
        <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <Twitter className="text-2xl hover:text-blue-400" />
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <Instagram className="text-2xl hover:text-pink-600" />
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-2xl hover:text-blue-500" />
        </a>
        <a href="https://www.github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <Github className="text-2xl hover:text-gray-400" />
        </a>
      </div>
      <div className="mt-4 text-sm text-gray-400">
        <p>&copy; 2024 JobLinker. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
