// import React from 'react';

// const AboutUs = () => {
//   const handleVideoClick = () => {
//     window.open('https://www.youtube.com/watch?v=24fdcMw0Bj0&pp=ygURZ3ltIHdvcmtvdXQgdmlkZW8%3D', '_blank');
//   };

//   return (
//     <section className="bg-white py-16">
//       <div className="container mx-auto flex flex-col md:flex-row items-center">
//         {/* Image Section */}
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <img
//             src=""
//             alt="Gym Trainer"
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="md:w-1/2 md:pl-12">
//           <h2 className="text-4xl font-bold mb-4 text-red-500">About Us</h2>
//           <p className="text-gray-700 mb-6">
//             Lorem ipsum dolor sit amet consectetur. Arcu amet volutpat a rhoncus
//             morbi iaculis ultricies lobortis. Laoreet amet urna venenatis at.
//             Diam fames senectus feugiat est gravida bibendum. Rhoncus donec
//             justo aliquam a blandit tellus elit consectetur convallis.
//           </p>
//           <button className="bg-red-500 text-white px-6 py-2 rounded-lg">Learn More</button>
//         </div>
//       </div>

//       <div className="container mx-auto mt-12 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 md:pr-12">
//           <h2 className="text-3xl font-bold mb-4 text-red-500">Why Choose Us?</h2>
//           <ul className="list-disc pl-5 text-gray-700">
//             <li className="mb-3">
//               <span className="font-bold text-red-500">Consultations with Expert</span>
//               <p>Lorem ipsum dolor sit amet consectetur. Arcu amet volutpat a rhoncus morbi iaculis ultricies lobortis.</p>
//             </li>
//             <li>
//               <span className="font-bold text-red-500">Best workout Facilities</span>
//               <p>Lorem ipsum dolor sit amet consectetur. Arcu amet volutpat a rhoncus morbi iaculis ultricies lobortis.</p>
//             </li>
//           </ul>
//         </div>

//         {/* Video Section */}
//         <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
//           <div onClick={handleVideoClick} className="cursor-pointer">
//             <img
//               src="https://c4.wallpaperflare.com/wallpaper/599/689/236/machine-dwayne-johnson-the-rock-workout-wallpaper-preview.jpg"
//               alt="Gym Video"
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;


import React from 'react';

const App = () => {
  const handleVideoClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* About Us Section */}
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
          At Gym and Fitness, we believe that fitness and wellbeing are the cornerstones of a full and vibrant life. Established in 2002, we began our journey as a family-owned business dedicated to providing exceptional gym equipment at affordable prices. But, we dreamed bigger than just being an ordinary fitness equipment supplier; we aspired to lead the industry.
          </p>
          <button className="bg-red-600 text-white py-2 px-4 rounded-md">
            Learn More
          </button>
        </div>
        <div 
          className="flex justify-center items-center cursor-pointer" 
          onClick={() => handleVideoClick('https://www.youtube.com/watch?v=24fdcMw0Bj0&pp=ygURZ3ltIHdvcmtvdXQgdmlkZW8%3D')}>
          <img 
            className="rounded-lg shadow-lg" 
            src="https://c4.wallpaperflare.com/wallpaper/599/689/236/machine-dwayne-johnson-the-rock-workout-wallpaper-preview.jpg" 
            alt="Video Thumbnail 1" 
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Why Choose Us?</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-lg font-semibold text-gray-900">Consultations with Expert</h3>
              <p className="text-gray-600">
              EXPERIENCE A DIFFERENT WAY TO WORK OUT
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-gray-900">Best Workout Facilities</h3>
              <p className="text-gray-600">
              We listen to you: We customize every workout to help you reach your goals.
              We motivate: Our personal trainers help you stay motivated as we work to establish a consistent workout schedule. 
              We design a fitness program that's structured to hold you accountable and create a lifestyle that encourages proper health and a positive well-being.
              </p>
            </li>
          </ul>
        </div>
        <div 
          className="flex justify-center items-center cursor-pointer" 
          onClick={() => handleVideoClick('https://www.youtube.com/watch?v=IpUQElrETw4&pp=ygURZ3ltIHdvcmtvdXQgdmlkZW8%3D')}>
          <img 
            className="rounded-lg shadow-lg" 
            src="https://i.pinimg.com/originals/b2/3e/cc/b23eccf13e5be83a265e0043debf75b4.jpg" 
            alt="Video Thumbnail 2" 
          />
        </div>
      </div>
    </div>
  );
};

export default App;
