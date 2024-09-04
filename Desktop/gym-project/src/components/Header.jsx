// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="sticky top-0 bg-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         <Link to="/" className="text-2xl font-bold">GymX</Link>
//         <nav>
//           <ul className="flex space-x-6">
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/Pricing">Pricing</Link></li>
//             <li><Link to="/Training">Training</Link></li>
//             <li><Link to="/Team">Team</Link></li>
         
            
           
//           </ul>
//         </nav>
//         {/* <Link to="/register" className="ml-auto bg-blue-500 text-white px-4 py-2 rounded">Join Us</Link> */}
//       </div>
//     </header>
//   );
// }

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold">GymX</Link>
        
        <button
          onClick={toggleMenu}
          className="text-gray-700 block md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0">
            <li><Link to="/about" className="block text-gray-700">About</Link></li>
            <li><Link to="/Pricing" className="block text-gray-700">Pricing</Link></li>
            <li><Link to="/Training" className="block text-gray-700">Training</Link></li>
            <li><Link to="/Team" className="block text-gray-700">Team</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;



// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       setUser(storedUser.name);
//     }
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//     navigate('/login'); // Redirect to login page after logout
//   };

//   return (
//     <header className="sticky top-0 bg-white shadow-md z-10">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         <Link to="/" className="text-2xl font-bold">GymX</Link>
        
//         <button
//           onClick={toggleMenu}
//           className="text-gray-700 block md:hidden focus:outline-none"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>

//         <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
//           <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0">
//             <li><Link to="/about" className="block text-gray-700">About</Link></li>
//             <li><Link to="/Pricing" className="block text-gray-700">Pricing</Link></li>
//             <li><Link to="/Training" className="block text-gray-700">Training</Link></li>
//             <li><Link to="/Team" className="block text-gray-700">Team</Link></li>
//           </ul>
//         </nav>

//         {user ? (
//           <div className="ml-4 flex items-center space-x-4">
//             <span className="text-gray-700">Welcome, {user}</span>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Logout
//             </button>
//           </div>
//         ) : (
//           <Link
//             to="/login"
//             className="ml-auto bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Login
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
