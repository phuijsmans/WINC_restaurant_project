import { Flex, Tag } from "@chakra-ui/react";

export const ShowTags = ({ gap, justify, flexDir, tags, ...tagProps }) => {
  return (
    <>
      <Flex gap={gap} justify={justify} flexDir={flexDir} wrap="wrap">
        {tags.map((tag) => (
          <Tag key={tag} {...tagProps}>
            {tag.toUpperCase().replace("-", " ")}
          </Tag>
        ))}
      </Flex>
    </>
  );
};
