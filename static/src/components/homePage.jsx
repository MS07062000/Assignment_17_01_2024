import { useState, useEffect } from "react";
import Navbar from "./navbar";
import ImageInformation from "./imageInformation";
import SearchForm from "./searchForm";
import SearchResult from "./searchResult";
import Category from "./category";
import { search } from "./helpers/search";

const HomePage = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [imageInformation, setImageInformation] = useState(null);
  const handleSearch = async () => {
    setIsSearching(true);
    const response = await search(searchQuery, searchCategory);
    setSearchResult(response);
  };

  useEffect(() => {
    if (searchCategory != null && searchQuery.length > 0) {
      handleSearch();
    }
  }, [searchCategory]);

  return (
    <div className="bg-[url('https://s3-alpha-sig.figma.com/img/4612/66c8/4c5ae5807660eb18152caeff2019dde6?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FvX6cB-JOKiICE8vcy73FJVcapTGqunvcuXCt-Jfnxmrpdcc2ZM6k~kGi~eFmTLe69Tch0Fa-MjplyevZqCy9e0d7~vcbMtnvXITFP7VZ1IqGqHFV09wyviG8h06uxVMOxHmWOrEonpGD3gR~DKIAIfji7L36s54tVNfwrFOsM1Wa4f1OG3LHPxt1WeG7DRJqiXrKpIFdD~ypdjFk85WMaVFYGtiDsgNhY~G5EpCzKL3ogJqPEkWbbUjaGVOO5BuLPBepsxhDs30qvEJNVcO-B8kpTyisJtz5wwMbiDsK5Tjr9SmbZagKtJyPIMy96nOOdNHpF8pl-uzLQJIhsnPZg__')] bg-cover min-h-screen w-full">
      <Navbar />
      {!isSearching && (
        <p className="text-center text-white font-bold font-['Euclid Circular B'] pt-48 mb-24 min-h-content text-2xl mx-5 sm:text-4xl sm:mx-24 md:text-5xl md:mx-20 lg:text-7xl lg:mx-60 ">
          Discover over 2,000,000 free Stock Images
        </p>
      )}
      <SearchForm
        isSearching={isSearching}
        handleSearch={handleSearch}
        setSearchQuery={setSearchQuery}
      />
      {!isSearching && (
        <p
          className="w-max max-w-screen mx-auto h-10 bg-zinc-300 
        bg-opacity-10 rounded-lg shadow-inner backdrop-blur-2xl 
        py-2 px-7"
        >
          <span
            className="text-white text-sm font-bold font-
          [Euclid Circular B] leading-snug"
          >
            Trending:
          </span>
          <span
            className="text-white text-sm font-normal font-
          [Euclid Circular B] leading-snug"
          >
            {" "}
            flowers, love, forest, river
          </span>
        </p>
      )}
      {searchResult.length > 0 && (
        <div>
          <Category
            searchCategory={searchCategory}
            setSearchCategory={setSearchCategory}
          />
          <SearchResult
            searchResult={searchResult}
            setImageInformation={setImageInformation}
          />
        </div>
      )}
      {imageInformation != null && (
        <ImageInformation
          {...imageInformation}
          setImageInformation={setImageInformation}
        />
      )}
    </div>
  );
};

export default HomePage;
