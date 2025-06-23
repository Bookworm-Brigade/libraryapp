import React from "react";

export const Footer = () => {
  return (
         <footer className="py-8  text-gray-500">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/logo.png" alt="BookWorm Logo" width={40} height={40} className="w-8 h-8" />
              <span className="text-lg font-semibold">BookWorm</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © {new Date().getFullYear()} BookWorm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
};
