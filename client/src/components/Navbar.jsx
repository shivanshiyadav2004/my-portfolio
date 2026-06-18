const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold text-pink-400">
          Shivanshi Yadav
        </h1>

        <ul className="flex gap-8 text-lg">
          <li className="hover:text-pink-400 cursor-pointer"><a href="#">Home</a></li>
          
          <li className="hover:text-pink-400 cursor-pointer"><a href="#">About</a></li>
          
          <li className="hover:text-pink-400 cursor-pointer"><a href="#">Skills</a></li>
          
          <li className="hover:text-pink-400 cursor-pointer"><a href="#">Projects</a></li>
          
          <li className="hover:text-pink-400 cursor-pointer"><a href="#">Contact</a></li>
          
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;