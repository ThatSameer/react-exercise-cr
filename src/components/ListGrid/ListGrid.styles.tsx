import { Box, Heading, Text, ThemeType } from "@cruk/cruk-react-components";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  padding: 20px;
  justify-items: center;
`;

export const GridItemContainer = styled.div<{ theme: ThemeType }>`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 16 / 9;
  overflow: visible;
  border-radius: 8px;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  ${({ theme }) =>
    `@media (min-width: ${theme.breakpoint.tablet}) {
      &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        z-index: 10;
      }

      &:hover div {
        opacity: 1;
        pointer-events: auto;
      }
    }`}
`;

export const MobileContainer = styled(Box).attrs(() => ({
  padding: "xxs",
}))<{ theme: ThemeType }>`
  display: none;

  ${({ theme }) =>
    `@media (max-width: ${theme.breakpoint.tablet}) {
      display: block;
    }`}
`;

export const DesktopContainer = styled.div`
  ${({ theme }) =>
    `@media (max-width: ${theme.breakpoint.tablet}) {
      display: none;
    }`}
`;

export const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 8px;
  cursor: pointer;
`;

export const AudioContainer = styled(Box)`
  display: flex;
  align-items: end;
`;

export const VideoPreview = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
`;

export const AudioPreview = styled.audio`
  position: absolute;
  padding: 4px;
  width: 100%;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
`;

export const HoverOverlay = styled.div`
  position: absolute;
  bottom: 95%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  padding: 15px;
  background: rgba(0, 0, 0, 0.85);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  pointer-events: none;

  ${GridItemContainer}:hover & {
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, -10px);
  }
`;

export const HoverHeading = styled(Heading).attrs(() => ({
  h6: true,
  textColor: "textLight",
}))``;

export const HoverText = styled(Text).attrs(() => ({
  textColor: "textLight",
  textSize: "xs",
}))`
  overflow-y: auto;
  max-height: 120px;
  max-width: 100%;
`;

export const MobileText = styled(Text)`
  overflow-y: auto;
  max-height: 250px;
`;
