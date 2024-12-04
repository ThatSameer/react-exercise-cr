import { assetUrlBuilder } from "../assetUrlBuilder";

describe("assetUrlBuilder", () => {
  it("should return the correct image URL", () => {
    const url = assetUrlBuilder("image", "12345");
    expect(url).toBe(
      "https://images-assets.nasa.gov/image/12345/12345~orig.jpg"
    );
  });

  it("should return the correct video URL", () => {
    const url = assetUrlBuilder("video", "12345");
    expect(url).toBe(
      "https://images-assets.nasa.gov/video/12345/12345~orig.mp4"
    );
  });

  it("should return the correct audio URL", () => {
    const url = assetUrlBuilder("audio", "12345");
    expect(url).toBe(
      "https://images-assets.nasa.gov/audio/12345/12345~orig.mp3"
    );
  });

  it("should return an empty string for invalid media type", () => {
    const url = assetUrlBuilder(
      "invalid" as "image" | "video" | "audio",
      "12345"
    );
    expect(url).toBe("");
  });
});
