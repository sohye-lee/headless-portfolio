import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { theme } from "theme";

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
            fontSize={block.attributes.style?.typography.fontSize}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
            level={block.attributes.level}
          />
        );
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            fontSize={block.attributes.style?.typography.fontSize}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      case "core/separator": {
        return (
          <hr className="mt-8 mb-8 h-[1px] bg-black border-t border-t-black" />
        );
      }
      default: {
        return null;
      }
    }
  });
};
