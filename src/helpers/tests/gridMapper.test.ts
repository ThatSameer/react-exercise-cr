import { GridItemType } from "../../types";
import fallbackImage from "../assets/blackhole-fallback-image.jpg"; // Adjust the path if necessary
import gridMapper from "../gridMapper";

describe("gridMapper", () => {
  it("should map nasaResponse items to GridItemType correctly", () => {
    const mockResponse = {
      collection: {
        items: [
          {
            data: [
              {
                title: "Test Image",
                description: "A beautiful test image",
                media_type: "image",
                nasa_id: "test123",
              },
            ],
            links: [
              {
                rel: "preview",
                href: "https://example.com/preview.jpg",
              },
            ],
          },
          {
            data: [
              {
                title: "Another Test Image",
                description: "Another description",
                media_type: "image",
                nasa_id: "test456",
              },
            ],
            links: [
              {
                rel: "preview",
                href: "https://example.com/preview2.jpg",
              },
            ],
          },
        ],
      },
    };

    const result: GridItemType[] = gridMapper(mockResponse as any);
    expect(result).toEqual([
      {
        src: "https://example.com/preview.jpg",
        title: "Test Image",
        description: "A beautiful test image",
        mediaType: "image",
        nasaId: "test123",
      },
      {
        src: "https://example.com/preview2.jpg",
        title: "Another Test Image",
        description: "Another description",
        mediaType: "image",
        nasaId: "test456",
      },
    ]);
  });

  it("should use fallback image if no preview link is available", () => {
    const mockResponse = {
      collection: {
        items: [
          {
            data: [
              {
                title: "Test Image Without Preview",
                description: "This image does not have a preview link",
                media_type: "image",
                nasa_id: "test789",
              },
            ],
            links: [],
          },
        ],
      },
    };

    const result: GridItemType[] = gridMapper(mockResponse as any);
    expect(result).toEqual([
      {
        src: fallbackImage.src,
        title: "Test Image Without Preview",
        description: "This image does not have a preview link",
        mediaType: "image",
        nasaId: "test789",
      },
    ]);
  });

  it("should handle missing fields with fallback fields", () => {
    const mockResponse = {
      collection: {
        items: [
          {
            data: [{}],
            links: [
              {
                rel: "preview",
                href: "https://example.com/preview3.jpg",
              },
            ],
          },
        ],
      },
    };

    const result: GridItemType[] = gridMapper(mockResponse as any);
    expect(result).toEqual([
      {
        src: "https://example.com/preview3.jpg",
        title: "No title available",
        description: "No description available.",
        mediaType: "image",
        nasaId: "",
      },
    ]);
  });
});
