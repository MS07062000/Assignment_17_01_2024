export const search = async (query, category) => {
  try {
    const url = `https://pixabay.com/api/?key=&q=${query}${
      category != null ? `&category=${category}` : ""
    }`;

    fetch(`https://uncors.vercel.app/?url=${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include",
    }).then((response) => {
      console.log(response.json());
    });

    console.log(response.status);
    const data = await response.hits;

    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
