import { NasaSearchParams } from "../../types";
import { urlNasaSearch } from "../nasa";

describe("urlNasaSearch", () => {
  const params: NasaSearchParams = {
    keywords: "moon",
    mediaType: "image",
    yearStart: 2020,
    pageSize: 10,
  };
  it("should generate a URL with all parameters", () => {
    const expectedUrl =
      "https://images-api.nasa.gov/search?keywords=moon&media_type=image&year_start=2020&page_size=10";
    const generatedUrl = urlNasaSearch(params);
    expect(generatedUrl).toBe(expectedUrl);
  });

  it("should not include page_size if not provided", () => {
    const { pageSize, ...searchParams } = params;

    const expectedUrl =
      "https://images-api.nasa.gov/search?keywords=moon&media_type=image&year_start=2020";
    const generatedUrl = urlNasaSearch(searchParams);
    expect(generatedUrl).toBe(expectedUrl);
  });

  it("should not include year_start if not provided", () => {
    const { yearStart, ...searchParams } = params;

    const expectedUrl =
      "https://images-api.nasa.gov/search?keywords=moon&media_type=image&page_size=10";
    const generatedUrl = urlNasaSearch(searchParams);
    expect(generatedUrl).toBe(expectedUrl);
  });
});
