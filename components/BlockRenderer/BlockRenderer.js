import Cover from "components/Cover/Cover";
import Heading from "components/Heading/Heading";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover": {
        return (
          <Cover
            key={block.id}
            backgroundUrl={block.attributes.url}
            innerBlocks={block.innerBlocks}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.content}
            level={block.attributes.level}
          />
        );
      }
      default: {
        return null;
      }
    }
  });
};
