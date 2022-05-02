import React from 'react';

function About({ setCurrentPage }) {
  setCurrentPage("About");
  return (
    <h1 className="text-center">About Page</h1>
  );
}

export default About;
