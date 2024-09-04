import React from 'react';

const Training = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Training Equipment</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-center">
          <img 
            className="rounded-lg shadow-lg" 
            src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Treadmill Exercise" 
          />
          <p className="text-gray-700 mt-2">Treadmill Exercise</p>
        </div>
        <div className="text-center">
          <img 
            className="rounded-lg shadow-lg" 
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Battle Ropes Training" 
          />
          <p className="text-gray-700 mt-2">Battle Ropes Training</p>
        </div>
        <div className="text-center">
          <img 
            className="rounded-lg shadow-lg" 
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Barbell Lifting" 
          />
          <p className="text-gray-700 mt-2">Barbell Lifting</p>
        </div>
        <div className="text-center">
          <img 
            className="rounded-lg shadow-lg" 
            src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Yoga Practice" 
          />
          <p className="text-gray-700 mt-2">Yoga Practice</p>
        </div>
        <div className="text-center">
          <img 
            className="rounded-lg shadow-lg" 
            src="https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" 
            alt="Dumbbell Rack" 
          />
          <p className="text-gray-700 mt-2">Dumbbell Rack</p>
        </div>
        <div className="text-center">
          <img 
            className="rounded-lg shadow-lg" 
            src="https://images.pexels.com/photos/1544774/pexels-photo-1544774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Boxing Practice" 
          />
          <p className="text-gray-700 mt-2">Boxing Practice</p>
        </div>
      </div>
    </div>
  );
};

export default Training;
