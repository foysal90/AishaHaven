import React, { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import MyBookings from "../../pages/Dashboard/MyBookings";
import MyListings from "../../pages/Dashboard/MyListings";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="m-10 p-5">
      <div className="text-center card w-full  bg-base-100 shadow-xl image-full">
        <figure>
          <img
            className="w-48 rounded-2xl mx-auto"
            src={user?.photoURL}
            alt="avatar"
          />
        </figure>
        <div className="card-body mt-5">
          <h2 className="card-title">Name : {user?.displayName}</h2>
          <p>Email: {user?.email}</p>
        </div>
        <h1 className="text-start mt-5 ml-5 text-xl font-black">My Listings</h1>
        <MyListings />
        <h1 className="text-start mt-5 ml-5 text-xl font-black">My Bookings</h1>
        <MyBookings  />
      </div>
    </div>
  );
};

export default Profile;
