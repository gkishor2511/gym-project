// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <section id="program" className="py-20 bg-gray-100">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center">Our Programs</h2>
//           {/* Program content here */}
//         </div>
//       </section>

//       <section id="training" className="py-20">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center">Training</h2>
//           {/* Training content here */}
//         </div>
//       </section>

//       <section id="pricing" className="py-20 bg-gray-100">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center">Pricing</h2>
//           {/* Pricing content here */}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;


// import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import { Link } from "react-scroll"; 

// const Home = () => {
//   return (
//     <div
//     name="home"
//     className="h-screen w-full bg-[#0a192f]"
//   >
//     <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//       <div className="flex flex-col justify-center h-full">
//         <h2 className="text-4xl sm:text-7xl font-bold text-white">
//           I'm a Full Stack Web Developer
//         </h2>
//         <p className="text-gray-500 py-4 max-w-md">
//            I have  years of experience in graphics design and web development.
//           Currently, I love to work on web application using technologies like
//           React, Tailwind, Next.js and Mongodb.
//         </p>
//         <div>
        
//         </div>
//       </div>
//       <div>
       
//       </div>
//     </div>
//   </div>
//   );
// };
// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="text-center text-white max-w-md">
        <h1 className="text-4xl font-bold mb-4">
           <span className="text-red-500">Not everyone can wake up every day feeling energized and motivated to put in the hard work that it takes to stay fit.</span>.<br />
          
        </h1>
        <Link
          to="/register"
          className="mt-8 bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600"
        >
          Join With Us
        </Link>
      </div>
    </div>
  );
};

export default Home;
