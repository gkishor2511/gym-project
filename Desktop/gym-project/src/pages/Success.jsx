import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold text-green-500">Registration Successful!</h1>
      <p className="mt-6">You have successfully registered. Click below to go back to the home page.</p>
      <Link to="/" className="mt-10 inline-block bg-blue-500 text-white px-6 py-3 rounded">
        Go Home
      </Link>
    </div>
  );
}

export default Success;
