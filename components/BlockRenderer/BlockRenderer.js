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
          <div key={block.id} className="">
            <Heading
              key={block.id}
              content={block.attributes.content}
              textAlign={block.attributes.textAlign}
              level={block.attributes.level}
            />
          </div>
        );
      }
      default: {
        return null;
      }
    }
  });
};
