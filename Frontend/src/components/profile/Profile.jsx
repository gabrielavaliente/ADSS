import React from 'react';
import ProfilePhoto from "../../img/3682281.png";
import profileFetch from '../../services/profileFetch';

const Profile = () => {
  const { userData } = profileFetch();

  if (!userData) {
    return (
      <div className="flex items-center justify-center h-500">
        <div className="text-4xl font-bold text-gray-800">No has iniciado sesion...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-500">
      <div className="grid md:grid-cols-2 gap-20 px-5 md:px-20">
        <div className="flex justify-center md:justify-end">
          <img src={ProfilePhoto} alt="Profile photo" className="rounded-full w-80 h-80" />
        </div>

        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="pb-3 md:pb-5 text-xl md:text-3xl font-bold text-[#2F4D55]">Username: {userData.username}</p>
          <p className="pb-3 md:pb-5 text-xl md:text-3xl font-bold text-[#2F4D55]">Email: {userData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
