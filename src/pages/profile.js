import React from 'react';

function Profile({setCurrentPage}) {
  setCurrentPage("Account");
  return (
    <div><h1 className="text-center">Profile Page</h1></div>
  );
}

export default Profile;
