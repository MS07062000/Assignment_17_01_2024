export const search = async (query, category) => {
  try {
    const url = `https://pixabay.com/api/?key=${
      import.meta.env.VITE_APP_APIKEY
    }&q=${query}&image_type=photo${
      category != null ? `&category=${category}` : ""
    }`;

    const response = await fetch(`${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include",
    });

    if (response.status === 200) {
      const data = await response.json();

      console.log(data.hits);

      return data.hits;
    } else {
      throw new Error("Server responded with an error:', response.status");
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
