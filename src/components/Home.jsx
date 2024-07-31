import React from "react";

function Home() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="font-serif">
        <h1 className="text-3xl ">You're Logged In Now</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Y_tDBvseFGL50dIKprE0ii3Q7X4VGZVJxQ&s"
          alt="Success Image"
          className="w-full rounded-xl bg-gradient-to-br"
        />
        <h1 className="text-xl ">ASSESSMENT COMPLETED SUCCESSFULLY!</h1>
      </div>
    </div>
  );
}

export default Home;
