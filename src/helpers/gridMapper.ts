import { GridItemType, NasaResponse } from "../types";
import fallbackImage from "../assets/blackhole-fallback-image.jpg";

const gridMapper = (items: NasaResponse): GridItemType[] =>
  items.collection.items.map((item) => ({
    src:
      item.links?.find((item) => item.rel === "preview")?.href ||
      fallbackImage.src,
    title: item.data[0]?.title || "No title available",
    description: item.data[0]?.description || "No description available.",
    mediaType: item.data[0]?.media_type || "image",
    nasaId: item.data[0]?.nasa_id || "",
  }));

export default gridMapper;
