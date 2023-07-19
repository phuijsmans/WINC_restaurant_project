import { Tag } from "@chakra-ui/react";

export const ShowTags = ({ tags, ...tagProps }) => {
  return (
    <>
      {tags.map((tag) => (
        <Tag key={tag} {...tagProps}>
          {tag.toUpperCase()}
        </Tag>
      ))}
    </>
  );
};
