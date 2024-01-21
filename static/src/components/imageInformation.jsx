import { useState } from "react";
import { downloadImage } from "./helpers/downloadImage"
const ImageInformation = ({
  imageID,
  srcImage,
  downloadItems,
  informationItems,
  tags,
  setImageInformation,
}) => {
  const [selectDownloadImageSize, setSelectDownloadImageSize] =
    useState("640x960");
  const handleClickDownloadImage = (e) => {
    const imageWidth = selectDownloadImageSize.split("x")[0];
    const imageHeight = selectDownloadImageSize.split("x")[1];
    downloadImage(srcImage, imageWidth, imageHeight);
  };
  return (
    <div className="overflow-hidden fixed top-0 left-0 lg:w-max z-[200] h-max max-h-max bg-white rounded-lg lg:m-4 border-slate-200 border">
      <div className="bg-neutral-100 shadow flex h-16 px-8 py-2.5 items-center rounded-tl-lg rounded-tr-lg">
        <p className="text-zinc-700 text-xl font-medium font-['Euclid Circular B'] leading-10">
          Preview ID: {imageID}
        </p>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-
          gray-200 hover:text-gray-900 rounded-lg text-sm w-8 
          h-8 ms-auto inline-flex justify-center items-center 
          border-black border-solid border-2"
          onClick={() => setImageInformation(null)}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div className="px-8 py-4 h-96 max-h-max overflow-y-auto">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
          <img src={srcImage} className="lg:basis-3/4 w-96 h-96 rounded-lg" />

          <div className="lg:basis-1/4 flex flex-col gap-4">
            <p
              className="text-zinc-700 text-xl font-medium 
              font-['Euclid Circular B'] leading-10"
            >
              Download
            </p>
            <div className="border border-slate-200 rounded-md">
              {downloadItems.map((imageInfo, index) => (
                <DownloadItem
                  key={imageInfo.type}
                  imageType={imageInfo.type}
                  imageWidth={imageInfo.imageWidth}
                  imageHeight={imageInfo.imageHeight}
                  selectDownloadImageSize={selectDownloadImageSize}
                  setSelectDownloadImageSize={setSelectDownloadImageSize}
                  isLastItem={index === downloadItems.length - 1}
                />
              ))}
            </div>
            <button
              className="h-9 bg-green-500 rounded text-
              center text-white text-xs font-semibold font-
              ['Euclid Circular B'] leading-none py-2.5 px-2.5"
              onClick={handleClickDownloadImage}
            >
              Download for free!
            </button>
            <p
              className="text-zinc-700 text-xl font-medium 
              font-['Euclid Circular B'] leading-10"
            >
              Information
            </p>
            <div className="flex flex-row flex-wrap gap-y-1 gap-x-4 items-start">
              {Object.keys(informationItems).map((item) => (
                <InformationItem
                  key={item}
                  label={item}
                  value={informationItems[item]}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center py-4">
          <p className="text-zinc-700 text-lg font-bold font-['Euclid Circular B'] leading-10 pr-4">
            Tags:
          </p>
          <div className="flex flex-row flex-wrap gap-2 items-center">
            {tags.map((tag, index) => (
              <TagChip key={index} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageInformation;

const DownloadItem = ({
  imageType,
  imageWidth,
  imageHeight,
  selectDownloadImageSize,
  setSelectDownloadImageSize,
  isLastItem,
}) => (
  <div
    className={`flex flex-row justify-between items-center px-2 py-1 ${
      !isLastItem ? "border-b border-slate-200" : ""
    }`}
  >
    <p className="w-32 text-slate-600 text-xs font-normal font-['Euclid Circular B'] leading-snug">
      {imageType}
    </p>
    <div className="flex flex-row gap-2 items-center">
      <p className="text-slate-600 text-xs font-bold font-['Euclid Circular B'] leading-loose">
        {imageWidth}
        {"x"}
        {imageHeight}
      </p>
      <div
        className={`flex items-center justify-center h-3.5 w-3.5 rounded-full ${
          selectDownloadImageSize === `${imageWidth}x${imageHeight}`
            ? "bg-green-500"
            : "bg-white border border-slate-200"
        }`}
        onClick={() => {
          setSelectDownloadImageSize(`${imageWidth}x${imageHeight}`);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-2 h-2 text-white"
          viewBox="0 0 448 512"
        >
          <path
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
      </div>
    </div>
  </div>
);

const InformationItem = ({ label, value }) => (
  <div className="w-28 lg:w-20">
    <p
      className="text-zinc-500 text-xs font-semibold font-
      ['Euclid Circular B'] capitalize leading-normal"
    >
      {label}
    </p>
    <p
      className="text-zinc-700 text-base font-semibold font-
      ['Euclid Circular B'] capitalize leading-normal break-words"
    >
      {value}
    </p>
  </div>
);

export const TagChip = ({ tag }) => (
  <div className="p-2 bg-neutral-100 rounded-sm ">
    <p
      className="text-neutral-500 text-xs font-normal font-
    ['Helvetica Neue'] capitalize leading-normal"
    >
      {tag}
    </p>
  </div>
);
