import { Collapse } from "@cruk/cruk-react-components";
import { GridItemType } from "../../types";
import {
  DesktopContainer,
  GridContainer,
  GridItemContainer,
  HoverHeading,
  HoverOverlay,
  HoverText,
  MediaContainer,
  MobileContainer,
  MobileText,
} from "./ListGrid.styles";
import { getMediaElement } from "./getMediaElement";

export function ListGrid({ items }: { items: GridItemType[] }) {
  return (
    <GridContainer>
      {items.map((item, index) => (
        <GridItemContainer key={index}>
          <MediaContainer>{getMediaElement(item)}</MediaContainer>

          <DesktopContainer>
            <HoverOverlay>
              <HoverHeading>{item.title}</HoverHeading>
              <HoverText>{item.description}</HoverText>
            </HoverOverlay>
          </DesktopContainer>

          <MobileContainer>
            <Collapse headerTitleText={item.title} id={item.nasaId}>
              <MobileText>{item.description}</MobileText>
            </Collapse>
          </MobileContainer>
        </GridItemContainer>
      ))}
    </GridContainer>
  );
}
