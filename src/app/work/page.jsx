import React from "react";

import WorkpageComp from "./WorkpageComp";
import Link from "next/link";

const workListArr = [
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

const WorkPage = () => {
  return (
    <section className="w-[344px] sm:w-full mx-auto sm:mx-0 h-auto ">
      <div className="w-full sm:w-[856px] mx-auto">
        <div className="w-full h-[100px] text-[#21243D] flex items-start font-bold text-[44px]">
          Work
        </div>

        <div className="flex flex-col h-auto gap-6">
          {/*  */}

          {workListArr.map((item) => (
            <Link href={`work/${item.id}`} key={item.id}>
              <WorkpageComp
                title={item.title}
                img={item.img}
                label={item.label}
                btnContent={item.btnContent}
                content={item.content}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPage;