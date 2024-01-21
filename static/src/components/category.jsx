const Category = ({ searchCategory, setSearchCategory }) => {
  const categories = [
    "backgrounds",
    "fashion",
    "nature",
    "science",
    "education",
    "feelings",
    "health",
    "people",
    "religion",
    "places",
    "animals",
    "industry",
    "computer",
    "food",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music",
  ];
  return (
    <div className="bg-neutral-100">
      <div className="py-7 px-8 flex flex-row flex-nowrap gap-4 overflow-x-auto overdlow-y-hidden no-scrollbar">
        {categories.map((category) => (
          <p
            key={category}
            className={`text-center text-neutral-500 text-sm font-medium font-['Helvetica Neue'] capitalize leading-none px-14 py-3.5 rounded border border-neutral-300 ${
              searchCategory === category ? "border-red" : "border-black"
            }`}
            onClick={() => {
              setSearchCategory(category);
            }}
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Category;
