import React from 'react';

const teamMembers = [
  {
    name: 'Amitee Loiselle',
    role: 'Fitness Coach',
    imageUrl: 'https://static.wixstatic.com/media/1f6b39_15a373b3f9ac412c995df21f0d7acf0f~mv2.jpg/v1/crop/x_1,y_0,w_1364,h_1002/fill/w_443,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GAZ%20ON%20BENCH_edited_edited_edited_edited.jpg', // Replace with actual image URL
  },
  {
    name: 'Liam Harpaul',
    role: 'CrossFit Coach',
    imageUrl: 'https://static.wixstatic.com/media/1f6b39_87de4ff293cb4c2c80e3aaae97c45466~mv2.jpg/v1/crop/x_0,y_163,w_2001,h_1470/fill/w_443,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/JAKE%20TREATMENT%20ROOM%202_edited_edited.jpg', // Replace with actual image URL
  },
  {
    name: 'Mark Anthony',
    role: 'CrossFit Coach',
    imageUrl: 'https://static.wixstatic.com/media/1f6b39_3d5cf00b6262427d823e0fc1f676ff53~mv2.jpg/v1/crop/x_0,y_376,w_1366,h_1003/fill/w_443,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/SOPHIE%20ON%20BENCH_edited.jpg', // Replace with actual image URL
  },
  {
    name: 'Ron Richardson',
    role: 'Body Building',
    imageUrl: 'https://static.wixstatic.com/media/1f6b39_4fe3ba480a8c44efb8e1d9a52a007a58~mv2.jpg/v1/crop/x_0,y_135,w_2001,h_1470/fill/w_443,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/REBECCA%20PROFILE%20PHOTO_edited.jpg', // Replace with actual image URL
  },
];

const Team = () => {
  return (
    <section className="bg-white-900 text-white py-12">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-400">
          We are a team of experienced people, nutrition, sports, and fitness passionate experts with talent
          and knowledge unsurpassed in the industry. Get to know us.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-transparent border border-white text-white py-2 px-6 rounded hover:bg-white hover:text-gray-900 transition duration-300">
          See the Whole Team
        </button>
      </div>
    </section>
  );
};

export default Team;
