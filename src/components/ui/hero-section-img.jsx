"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl   ">
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full"
        >
          <img
            src="assets/hero.jpg"
            // height="1000"
            // width="1000"
            className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        
      </CardBody>
    </CardContainer>
  );
}
