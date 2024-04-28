import { BlockRenderer } from "components/BlockRenderer";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";

export default function ImageGallery({ columns, className, blocks }) {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="px-8 py-6 pb-12 bg-gray-50 my-8">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={pagination}
        modules={[Pagination]}
        autoplay
        className="w-full"
      >
        {blocks &&
          blocks.length > 0 &&
          blocks.map((block, i) => (
            <SwiperSlide key={i}>
              <Image
                src={block.attributes.url}
                className="object-fit"
                alt=""
                width="2000"
                height="1000"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
