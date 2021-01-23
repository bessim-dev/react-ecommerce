import React from "react";
import {
  BackgroundImgComponent,
  TitleComponent,
  SubtitleComponent,
  ContentComponent,
  MenuItemComponent,
} from "./Menu-item.styles";
import { withRouter } from "react-router-dom";
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <MenuItemComponent
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImgComponent
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentComponent className="content">
        <TitleComponent>{title.toUpperCase()}</TitleComponent>
        <SubtitleComponent>Shop Now</SubtitleComponent>
      </ContentComponent>
    </MenuItemComponent>
  );
};

export default withRouter(MenuItem);
