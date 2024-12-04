import { NasaSearchParams } from "../types";

export const NASA_API_URL = "https://images-api.nasa.gov/search";

export const urlNasaSearch = ({
  keywords,
  mediaType,
  yearStart,
  pageSize,
}: NasaSearchParams): string => {
  const paramsObjectWithSnakeCaseKeys = {
    keywords,
    media_type: mediaType,
    ...(!!yearStart &&
      !Number.isNaN(yearStart) && { year_start: `${yearStart}` }),
    ...(pageSize && { page_size: `${pageSize}` }),
  };
  const paramsString = new URLSearchParams(
    paramsObjectWithSnakeCaseKeys
  ).toString();
  return `${NASA_API_URL}?${paramsString}`;
};

export const urlNasaAsset = (nasaId: string): string => {
  return `https://images-api.nasa.gov/asset/${encodeURIComponent(nasaId)}`;
};
