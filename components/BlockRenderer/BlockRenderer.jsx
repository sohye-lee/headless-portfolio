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
import { PortfolioSearch } from "components/portfolioSearch";
import { FormspreeForm } from "components/FormspreeForm";
import { PortfolioFeatures } from "components/PortfolioFeatures";
import { ImageGallery } from "components/ImageGallery";
import { SocialLink } from "components/SocialLinks/SocialLink";
import { SocialLinks } from "components/SocialLinks";
import { List } from "components/List";
import { ListItem } from "components/List/ListItem";
import { StackList } from "components/StackList";
import { Html } from "components/Html";

export const BlockRenderer = ({ blocks }) => {
  return (
    blocks &&
    blocks.map((block) => {
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
              fontSize={block.attributes.fontSize}
              customFontSize={block.attributes.style?.typography?.fontSize}
              content={block.attributes.content}
              textAlign={block.attributes.textAlign}
              level={block.attributes.level}
              textColor={
                theme[block.attributes?.textColor] ||
                block.attributes.style?.color?.text
              }
              className={block.attributes?.className}
            />
          );
        }
        case "core/paragraph": {
          return (
            <Paragraph
              key={block.id}
              fontSize={block.attributes.fontSize}
              customFontSize={block.attributes.style?.typography?.fontSize}
              textAlign={block.attributes?.textAlign}
              content={block.attributes?.content}
              textColor={
                theme[block.attributes?.textColor] ||
                block.attributes.style?.color?.text
              }
              className={block.attributes?.className}
              fontWeight={block.attributes.style?.typography?.fontWeight}
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
          console.log("button:", block);
          return (
            <CallToActionButton
              key={block.id}
              align={block.attributes?.data?.align}
              label={block.attributes?.data?.label}
              link={block.attributes?.data?.link?.guid}
              textLink={block.attributes?.data?.text_link}
              classname={block.attributes?.data?.classname}
            />
          );
        }
        case "core/columns": {
          return (
            <Columns
              key={block.id}
              isStackedOnMobile={block.attributes?.isStackedOnMobile}
              backgroundColor={block.attributes?.backgroundColor}
              style={block.attributes?.style}
              className={block.attributes?.className}
            >
              {block.innerBlocks ? (
                <BlockRenderer blocks={block.innerBlocks} />
              ) : (
                <span></span>
              )}
            </Columns>
          );
        }
        case "core/column": {
          return (
            <Column
              key={block.id}
              width={block.attributes?.width}
              backgroundColor={block.attributes?.backgroundColor}
              className={block.attributes?.className}
              style={block.attributes?.style}
            >
              {block.innerBlocks && (
                <BlockRenderer blocks={block.innerBlocks} />
              )}
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
        case "acf/portfoliosearch": {
          return <PortfolioSearch key={block.id} />;
        }
        case "acf/portfoliofeatures": {
          return (
            <PortfolioFeatures
              key={block.id}
              stack={block.attributes.stack}
              role={block.attributes.role}
              main_role={block.attributes.main_role}
              description={block.attributes.description}
              tagline={block.attributes.tagline}
              company={block.attributes.company}
              company_website={block.attributes.company_website}
              type={block.attributes.type}
              link={block.attributes.link}
            />
          );
        }
        case "acf/formspreeform": {
          return (
            <FormspreeForm
              key={block.id}
              formId={block.attributes.data.form_id}
            />
          );
        }
        case "core/gallery": {
          console.log("gallery:", block);
          return (
            <ImageGallery
              className={block.attributes?.className}
              columns={block.attributes?.columns}
              key={block.id}
              blocks={block.innerBlocks}
            />
          );
        }
        case "core/social-link": {
          return (
            <SocialLink
              key={block.id}
              rel={block.attributes?.rel}
              service={block.attributes?.service}
            />
          );
        }
        case "core/social-links": {
          return (
            <SocialLinks key={block.id}>
              <BlockRenderer blocks={block.innerBlocks} />
            </SocialLinks>
          );
        }
        case "core/list": {
          return (
            <List key={block.id}>
              <BlockRenderer blocks={block.innerBlocks} />
            </List>
          );
        }
        case "core/list-item": {
          return (
            <ListItem
              key={block.id}
              content={block.attributes?.content}
              fontSize={block.attributes.fontSize}
              fontWeight={block.attributes.style?.typography?.fontWeight}
            />
          );
        }
        case "acf/stacklist": {
          return (
            <StackList key={block.id} stack={block.attributes?.data?.stack} />
          );
        }
        case "core/html": {
          return <Html key={block.id} htmlContent={block.htmlContent} />;
        }
        default: {
          console.log("unknown:", block);
          return null;
        }
      }
    })
  );
};
