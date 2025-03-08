import React from "react";
import { Button } from "@/components/ui/MovingBorderButton";
import { recentBlogs } from "@/data";
import Link from "next/link";
const Blogs = () => {
  return (
    <div id="blogs" className="w-full py-20">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center">
          My <span className="text-purple">Blogs</span>
        </h1>
        <p className=" text-center text-white-200 mt-6">
          Thougths, tutorials and insights from my development journey
        </p>
      </div>
      <div className=" my-20 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-8 mx-auto">
        {recentBlogs?.map((item) => (
          <Link
            href={item.url}
            key={item.id}
            className=" relative flex justify-center items-center"
          >
            <Button className=" flex flex-col p-2 gap-2 items-center justify-center">
              <div
                className="relative w-full h-full overflow-hidden rounded-md"
                style={{ backgroundColor: "#13162D" }}
              >
                <div
                  className="w-full h-full lg:rounded-3xl "
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.image}
                  alt="cover"
                  className=" object-cover w-full h-full absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base ">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm "
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <p className=" flex justify-end items-center w-full">
                {item.readTime}
              </p>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
