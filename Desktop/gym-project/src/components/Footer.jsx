import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Company Section */}
        <div>
          <h4 className="text-yellow-400 font-bold mb-4">Company</h4>
          <ul>
            <li><Link to="/about">About </Link></li>
            <li><Link to="/Pricing">Pricing</Link></li>
            <li><Link to="/Training">Training</Link></li>

            <li><Link to="/Team">Team</Link></li>
            
            
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-yellow-400 font-bold mb-4">Contact</h4>
          <p>Hyderabad</p>
          <p>+012 345 67890</p>
          <p>info@example.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Opening Section */}
        <div>
          <h4 className="text-yellow-400 font-bold mb-4">Opening</h4>
          <p>Monday - Saturday</p>
          <p>09AM - 09PM</p>
          <p>Sunday</p>
          <p>10AM - 08PM</p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-yellow-400 font-bold mb-4">Newsletter</h4>
          <p className="mb-4">"Will you be ready for summer? ...
"The gym is open! ...
"Your health is important to us. ...
"Discover our new yoga program! ...</p>
          {/* <form>
            <input type="email" placeholder="Your email" className="w-full px-3 py-2 mb-4 text-black" />
            <button className="w-full bg-yellow-500 text-white py-2">SIGNUP</button>
          </form> */}
              <Link
          to="/register"
          className="mt-8 bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600"
        >
          Join With Us
        </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto text-center border-t border-gray-700 mt-8 pt-4">
        <p>&copy; 2024 GymX. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
