require("dotenv").config();
const fetchImagesFromPixabay = async (query, category) => {
  try {
    const apiKey = process.env.PIXABAY_API_KEY;
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo${
      category != null ? `&category=${category}` : ""
    }`;

    const response = await fetch(url);
    console.log(url);

    if (response.status == 200) {
      const data = await response.json();
      return data.hits;
    } else {
      throw new Error(
        `Pixabay API responded with an error: ${response.status}`,
      );
    }
  } catch (error) {
    throw new Error(`Error fetching data from Pixabay API: ${error.message}`);
  }
};

module.exports = { fetchImagesFromPixabay };
