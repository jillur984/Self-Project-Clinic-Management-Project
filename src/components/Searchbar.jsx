const Searchbar = ({ onSearchChange }) => {
  return (
    <div className="flex justify-center mt-8">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full h-10 md:w-5/6 lg:w-2/3 xs:w-2/2 px-4 bg-gray-800 text-white border-2 border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
    </div>
  );
};

export default Searchbar;
