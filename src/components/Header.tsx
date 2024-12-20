import { ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-[#004d00] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl">PharmaLink</Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-[#66cc66]">Home</Link>
            <Link to="/about" className="hover:text-[#66cc66]">About</Link>
            <div className="relative group">
              <button className="hover:text-[#66cc66]">Categories</button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                <Link to="/category/vitamins" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Vitamins & Supplements
                </Link>
                <Link to="/category/personal-care" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Personal Care
                </Link>
                <Link to="/category/otc" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Over-the-Counter
                </Link>
              </div>
            </div>
            <Link to="/contact" className="hover:text-[#66cc66]">Contact</Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="text-sm hover:text-[#66cc66] hidden md:block"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="text-sm bg-[#66cc66] px-4 py-2 rounded-lg hover:bg-[#4da64d] transition-colors hidden md:block"
              >
                Sign Up
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <Link to="/account" className="hover:text-[#66cc66]">
                  <User className="w-6 h-6" />
                </Link>
                {/* Mobile Auth Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block md:hidden">
                  <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Login
                  </Link>
                  <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Sign Up
                  </Link>
                </div>
              </div>
              <Link to="/cart" className="relative hover:text-[#66cc66]">
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#66cc66] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}