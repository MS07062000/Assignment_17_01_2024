import { TagChip } from "./imageInformation";
const SearchResult = ({ searchResult, setImageInformation }) => {
  return (
    <div className="flex flex-row gap-x-14 gap-y-10 flex-wrap bg-white p-9">
      {searchResult.map((result, index) => {
        const tags = result.tags.split(",");
        const tagsToBeDisplayed = tags.slice(0, Math.min(3, tags.length));
        const imageInformation = {
          imageID: result.id,
          srcImage: result.largeImageURL,
          downloadItems: [
            {
              type: "Small",
              imageWidth: 640,
              imageHeight: 960,
            },
            {
              type: "Medium",
              imageWidth: 1920,
              imageHeight: 2660,
            },
            {
              type: "Big",
              imageWidth: 2400,
              imageHeight: 3600,
            },
            {
              type: "Original",
              imageWidth: result.imageWidth,
              imageHeight: result.imageHeight,
            },
          ],
          informationItems: {
            User: result.user,
            "User ID": result.user_id,
            Type: result.type,
            Views: result.views,
            Downloads: result.downloads,
            Likes: result.likes,
          },

          tags: tags,
        };
        return (
          <div
            key={index}
            onClick={() => {
              setImageInformation(imageInformation);
            }}
          >
            <img
              src={result.webformatURL}
              className="object-fill w-full md:w-96 h-60 rounded-lg"
              alt={"image"}
            />
            <div className="flex flex-row gap-4 mt-3">
              {tagsToBeDisplayed.map((tag, index) => (
                <TagChip key={index} tag={tag} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SearchResult;
