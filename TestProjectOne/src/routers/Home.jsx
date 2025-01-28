import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <p className="text-3xl underline text-slate-600">Home</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        voluptatem exercitationem corrupti ex magnam blanditiis voluptatibus
        facilis officia praesentium veritatis?
      </p>
      <Link to="/about">
        <button className="px-6 py-3 text-center m-3  bg-orange-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          About
        </button>
      </Link>
    </div>
  );
};

export default Home;
