export const search = async (query, category) => {
  try {
    const url = `${"https://assignment-17-01-2024-qnei.vercel.app"}/getImages?query=${query}${
      category != null ? `&category=${category}` : ""
    }`;

    const response = await fetch(`${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Server responded with an error:", response.status);
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
