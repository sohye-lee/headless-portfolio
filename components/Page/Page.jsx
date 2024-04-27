import { BlockRenderer } from "components/BlockRenderer";
import { Footer } from "components/Footer";
import { MainMenu } from "components/MainMenu";
import { PageTitle } from "components/PageTitle";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Page(props) {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      props.pageTitle.toLowerCase() == "contact"
    ) {
      // Initial Setup
      var canvas = document.querySelector("canvas");
      canvas.height = 800;
      canvas.width = 1000;
      var ctx = canvas.getContext("2d");

      var color = colorGenerator();
      var gravity = 1;
      var friction = 0.97;

      //Utility Functions
      function colorGenerator() {
        var red = String(Math.floor(Math.random() * 180) + 50);
        var yellow = String(Math.floor(Math.random() * 180) + 50);
        var blue = String(Math.floor(Math.random() * 180) + 50);
        return "rgb(" + red + "," + yellow + "," + blue + ")";
      }

      //Objects
      class Ball {
        constructor(x, y, dx, dy, radius, color) {
          this.x = x;
          this.y = y;
          this.dx = dx;
          this.dy = dy;
          this.radius = radius;
          this.color = color;
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath();
        }

        update() {
          if (this.y + this.radius + this.dy > canvas.height) {
            this.dy = -this.dy * friction;
          } else {
            this.dy += gravity;
          }

          if (
            this.x + this.radius + this.dx > canvas.width ||
            this.x - this.radius <= 0
          ) {
            this.dx = -this.dx;
          }
          this.x += this.dx;
          this.y += this.dy;
          this.draw();
        }
      }

      //Implementation
      var ball;
      function init() {
        ball = new Ball(canvas.width / 2, 0, 2, 0.3, 200, color);
      }

      //Animation Loop
      function animate() {
        requestAnimationFrame(animate);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ball.update();
      }

      init();
      animate();
    }
  }, [props.pageTitle]);

  return (
    <>
      {/* <Head>
        <title>{props.pageTitle} | Sohye Kim</title>
        <meta name="description" content={props.seo?.metaDesc} />
      </Head> */}
      <MainMenu items={props.mainMenuItems} ctaButton={props.ctaButton} />
      <div className="text-[18px] flex flex-col items-center w-full min-h-screen relative z-10 pt-10">
        <div className="px-4 max-w-[1440px] w-full pb-20 gap-0">
          {props.featuredImage && props.pageTitle !== "Home" && (
            <div className="w-full relative z-10">
              <Image
                className="object-fit "
                src={props.featuredImage}
                alt="featured image"
                width="2000"
                height="1000"
              />
            </div>
          )}
          <div className=" w-full pb-8 relative z-10">
            {props.pageTitle !== "Home" && (
              <PageTitle pageTitle={props.pageTitle} />
            )}
            <div className="pb-8 pt-2 w-full" id="main">
              <BlockRenderer blocks={props.blocks} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
