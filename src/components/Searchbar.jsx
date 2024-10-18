const Searchbar = () => {
  return (
    <div className="flex justify-center mt-8">
      <input
        type="text"
        placeholder="Search..."
        className="h-10 w-1/2 px-4 bg-gray-200 border-2 border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
    </div>
  );
};

export default Searchbar;
