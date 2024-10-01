import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="bg-black w-1/3 flex flex-col justify-between p-10 text-white relative z-10">
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">PORTFOLIO</h1>
        </div>
        {/* Adjusted to move content more towards the left and higher from the bottom */}
        <div className="flex flex-col items-start absolute bottom-40 left-40 space-y-5">
          <div className="flex flex-col">
            <h2 className="text-5xl font-bold">My Name Is</h2>
            <h2 className="text-5xl font-bold text-yellow-400 whitespace-nowrap">ANSHUL RAGHUWANSHI</h2>
          </div>
          <button className="bg-yellow-400 text-black px-6 py-3 mt-5 text-xl hover:bg-yellow-300 transition duration-300 whitespace-nowrap">
            I'M A UI DEVELOPER
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-2/3">
        {/* Image as Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1690487820274-ff62f9b59c35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydGZvbGlvJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Navbar */}
        <header className="absolute top-0 right-0 left-0 flex justify-center space-x-8 text-white p-10 bg-transparent z-20">
          <a href="#" className="hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 pb-1 transition duration-300">Home</a>
          <a href="#" className="hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 pb-1 transition duration-300">About</a>
          <a href="#" className="hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 pb-1 transition duration-300">Works</a>
          <a href="#" className="hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 pb-1 transition duration-300">Blog</a>
          <a href="#" className="hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 pb-1 transition duration-300">Contact</a>
        </header>
      </div>
    </div>
  );
}

export default App;
