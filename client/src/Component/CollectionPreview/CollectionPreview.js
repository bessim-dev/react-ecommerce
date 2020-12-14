import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./CollectionPreview.style";
const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
