const SearchForm = ({ isSearching, handleSearch, setSearchQuery }) => (
  <form
    className={`${isSearching ? "pt-48 pb-24" : ""} px-8 md:px-0`}
    onSubmit={(e) => {
      e.preventDefault();
      handleSearch();
    }}
  >
    <label
      htmlFor="default-search"
      className="mb-2 text-sm font-medium text-white sr-only"
    >
      Search
    </label>
    <div className="relative bg-zinc-300 bg-opacity-10 rounded-lg shadow-inner backdrop-blur-2xl w-full md:w-3/4 md:mx-auto mb-5 h-12 sm:h-14 md:h-16">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        id="default-search"
        className="block w-full h-full pl-10 pr-12 py-2 sm:py-3 md:py-4 md:pr-20 text-sm text-white rounded-lg bg-transparent border-transparent focus:border-transparent focus:ring-0"
        placeholder="Search Mockups, Logos..."
        onChange={(e) => setSearchQuery(e.target.value)}
        autoComplete="off"
        required
      />
      <button
        type="submit"
        className="rounded-lg border-2 border-white  text-white text-sm md:text-lg font-semibold font-['Euclid Circular B'] leading-tight absolute end-[0.45rem] bottom-[0.45rem] md:end-2 md:bottom-2 p-1.5 md:py-2 md:px-5 bg-zinc-700"
      >
        Go!
      </button>
    </div>
  </form>
);

export default SearchForm;
