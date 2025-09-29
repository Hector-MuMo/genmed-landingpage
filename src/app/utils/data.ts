export async function fetchReviews() {
  try {
    const res = await fetch(
      "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ52huoqLZz4UR-j-v3WhkXB8&key=xxx",
      {
        method: "GET",
      }
    );
    const reviews = await res.json();
    return reviews;
  } catch (error) {
    console.error("Fetch reviews error: ", error);
    throw new Error("Failed to get reviews. Try again");
  }
}
