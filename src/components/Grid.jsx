import React from "react";

import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";



const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => {
          return (
            <BentoGridItem
              id={item.id}
              title={item.title}
              description={item.description}
              key={item.id}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
