"use client";

import WorkdetailsComp from "@/components/details/WorkdetailsComp";
import React, { useEffect, useState } from "react";

const workDetailsArr = [
  {
    id: 1,
    title: "Designing Dashboards",
    img: "/assets/image1.png",
    label: "Dashboard",
    btnContent: "2020",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    title: "Vibrant Portraits of 2020",
    img: "/assets/image2.png",
    label: "Illustration",
    btnContent: "2018",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    title: "36 Days of Malayalam type",
    img: "/assets/image3.png",
    label: "Typography",
    btnContent: "2018",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 4,
    title: "Components",
    img: "/assets/image 4.png",
    label: "Components, Design",
    btnContent: "2018",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const getWorkDetailsById = async (id) => {
  return workDetailsArr.find((item) => item.id == id) || null;
};

const Detailspage = async ({ params }) => {
  const blogDetails = await getWorkDetailsById(params?.id);

  return (
    <section className="w-[344px] sm:w-full mx-auto sm:mx-0 h-auto p-10">
      <div className="w-full sm:w-[856px] mx-auto">
        <div className="w-[506px] flex items-start font-bold text-[#21243D] text-[34px] py-3.5 ">
          <h1>{blogDetails.title}</h1>
        </div>

        <div className="flex flex-col h-auto ">
          <WorkdetailsComp
            btnContent={blogDetails?.btnContent}
            label={blogDetails.label}
            content={blogDetails.content}
            img={blogDetails?.img}
          />
        </div>
      </div>
      <div className="w-full sm:w-[856px] mx-auto py-12 cursor-pointer ">
        <h2 className="font-bold text-[28px] text-[#21243D] ">Heading 1</h2>
        <h2 className="font-semibold text-[22px] text-[#21243D] py-2.5 ">
          Heading 2
        </h2>
        <p className="w-[650px] py-4 text-base pb-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <img src="/assets/image5.png" alt="picture 5" />
        <img src="/assets/image6.png" alt="picture 6" className="pt-9" />
      </div>
    </section>
  );
};

export default Detailspage;