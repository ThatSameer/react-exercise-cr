import Link from "next/link";
import audioPlaceholder from "../../assets/audio-placeholder.png";
import { assetUrlBuilder } from "../../helpers/assetUrlBuilder";
import { GridItemType } from "../../types";
import {
  AudioContainer,
  AudioPreview,
  ImagePreview,
  VideoPreview,
} from "./ListGrid.styles";

export const getMediaElement = (item: GridItemType) => {
  const assetUrl = assetUrlBuilder(item.mediaType, item.nasaId);

  switch (item.mediaType) {
    case "image":
      return (
        <Link href={assetUrl} rel="noopener noreferrer" target="_blank">
          <ImagePreview src={item.src} alt={item.title} />
        </Link>
      );
    case "video":
      return (
        <VideoPreview src={assetUrl} controls poster={item.src}>
          Your browser does not support the video tag.
        </VideoPreview>
      );
    case "audio":
      return (
        <AudioContainer>
          <ImagePreview src={audioPlaceholder.src} alt={item.title} />
          <AudioPreview src={assetUrl} controls>
            Your browser does not support the audio element.
          </AudioPreview>
        </AudioContainer>
      );
    default:
      return null;
  }
};
