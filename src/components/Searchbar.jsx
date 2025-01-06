import axios from "axios";
import { useEffect, useState } from "react";

const Searchbar = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleSearchData = async (searchDataComeHereBhai) => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVER_BASE_URL
          }/members/local/?search_term=${searchDataComeHereBhai}`
        );
        if (response.status === 200) {
          onSearchResults(response.data?.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (searchTerm.trim() !== "") {
      handleSearchData(searchTerm);
    } else {
      handleSearchData("");
    }
  }, [onSearchResults, searchTerm]);

  return (
    <div className="flex justify-center mt-8">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full h-10 md:w-5/6 lg:w-2/3 xs:w-2/2 px-4 bg-gray-800 text-white border-2 border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
    </div>
  );
};

export default Searchbar;
