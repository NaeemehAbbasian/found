'use client'; 

import { Search } from 'lucide-react'; 
import { useState, useEffect } from 'react';


const Header = () => {
  const [user, setUser] = useState(null); 
  useEffect(() => {
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'About us', href: '/about' },
    { name: 'Help & Support', href: '/support' },
  ];
  
  const NavLink = ({ href, children, className }) => (
    <a href={href} className={className}>
      {children}
    </a>
  );

  return (
    <header className="bg-white relative z-10" dir="ltr"> 
      <div className="max-w-7xl mx-auto h-20 flex items-center px-6 sm:px-8 lg:px-12">
        
        <NavLink href="/" className="flex-shrink-0">
          <img 
            src="/logo.png" 
            alt="3F Logo"
            className="w-8 object-contain" 
          />
        </NavLink>
        
        <nav className="hidden md:flex text-gray-700 ml-96 whitespace-nowrap">
          {navLinks.map((link, index) => (
            <NavLink 
              key={link.name}
              href={link.href} 
              className={`hover:text-indigo-600 font-medium transition text-base ${index > 0 ? 'ml-6' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="flex-grow"></div>

        <div className="flex items-center space-x-3 sm:space-x-5 flex-shrink-0">
          
          <div className="relative hidden lg:block">
            <input 
              type="text" 
              placeholder="Search brand, category, tag or..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition duration-150"
              style={{
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
                backgroundColor: 'white' 
              }}
            />
            
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <Search className="w-5 h-5" />
            </div>
          </div>

          {user ? (
            <NavLink 
              href="/profile" 
              className="relative w-11 h-11 flex items-center justify-center rounded-full overflow-hidden cursor-pointer p-0.5"
              style={{ backgroundColor: '#DDDFFF' }} 
            >
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                    <img 
                      src={user.user_metadata?.avatar_url || "https://placehold.co/40x40/dcdaff/5946D6?text=AD"} 
                      alt="User Avatar" 
                      className="object-cover w-full h-full rounded-full" 
                    />
                </div>
            </NavLink>
          ) : (
            <NavLink 
              href="/login" 
              className="px-5 py-2 text-sm font-semibold text-indigo-700 bg-white border border-indigo-200 rounded-full hover:bg-indigo-50 transition shadow-sm"
            >
              Sign In
            </NavLink>
          )}
        </div>
      </div>
      
      <div 
        className="absolute bottom-0 w-full h-px" 
        style={{ backgroundColor: '#DCDAFF' }} 
      ></div>
    </header>
  );
};

export default Header;
