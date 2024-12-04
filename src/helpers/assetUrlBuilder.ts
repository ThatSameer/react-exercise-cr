export const assetUrlBuilder = (
  mediaType: "image" | "video" | "audio",
  nasaId: string
): string => {
  switch (mediaType) {
    case "image":
      return `https://images-assets.nasa.gov/image/${nasaId}/${nasaId}~orig.jpg`;
    case "video":
      return `https://images-assets.nasa.gov/video/${nasaId}/${nasaId}~orig.mp4`;
    case "audio":
      return `https://images-assets.nasa.gov/audio/${nasaId}/${nasaId}~orig.mp3`;
    default:
      return "";
  }
};
