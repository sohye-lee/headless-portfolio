// import { Cover } from "components/Cover";
// import { Heading } from "components/Heading";
// import { Paragraph } from "components/Paragraph";
import CallToActionButton from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { theme } from "theme";
import Image from "next/image";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover": {
        return (
          <Cover
            key={block.id}
            backgroundUrl={block.attributes?.url}
            innerBlocks={block?.innerBlocks}
            className={block.attributes?.className}
          >
            <BlockRenderer blocks={block?.innerBlocks} />
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
            className={block.attributes?.className}
          />
        );
      }
      case "core/paragraph": {
        console.log(block);
        return (
          <Paragraph
            key={block.id}
            fontSize={block.attributes.style?.typography?.fontSize}
            textAlign={block.attributes?.textAlign}
            content={block.attributes?.content}
            textColor={
              theme[block.attributes?.textColor] ||
              block.attributes.style?.color?.text
            }
            className={block.attributes?.className}
          />
        );
      }
      case "core/separator": {
        return (
          <hr
            key={block.id}
            className={`mt-8 mb-8 h-[1px] bg-black border-t border-t-black ${block.attributes?.className}`}
          />
        );
      }
      case "acf/ctabutton": {
        return (
          <CallToActionButton
            key={block.id}
            align={block.attributes?.data?.align}
            label={block.attributes?.data?.label}
            link={block.attributes?.data?.link?.guid}
            className={block.attributes?.className}
          />
        );
      }
      case "core/columns": {
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes?.isStackedOnMobile}
            className={block.attributes?.className}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/column": {
        return (
          <Column
            key={block.id}
            width={block.attributes?.width}
            className={block.attributes?.className}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/image": {
        return (
          <Image
            key={block.id}
            src={block.attributes?.url}
            width={block.attributes?.width}
            height={block.attributes?.height}
            alt={block.attributes?.alt || "image"}
            className={block.attributes?.className}
          />
        );
      }
      case "core/block":
      case "core/group": {
        console.log(block);
        return (
          <div key={block.id} className={block.attributes?.className}>
            <BlockRenderer blocks={block.innerBlocks} />
          </div>
        );
      }
      case "core/spacer": {
        return (
          <div
            key={block.id}
            className={`w-full block`}
            style={{ height: block.attributes?.height }}
          ></div>
        );
      }
      default: {
        console.log("unknown:", block);
        return null;
      }
    }
  });
};
