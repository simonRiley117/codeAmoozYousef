import React, { useState } from "react";
import Phase from "@Components/Shared/Phase/Phase";
import TopicContent from "./Topic pages/TopicContent";

const PhaseList = [
  {
    PhaseNumber: 1,
    phaseName: " شروع ",
  },
  {
    PhaseNumber: 2,
    phaseName: " جلسه اول ",
  },
  {
    PhaseNumber: 3,
    phaseName: " جلسه دوم",
  },
  {
    PhaseNumber: 4,
    phaseName: " جلسه سوم ",
  },
  {
    PhaseNumber: 5,
    phaseName: " جلسه چهارم ",
  },
  {
    PhaseNumber: 6,
    phaseName: " پایان ",
  },
];

const Coursetopiccontainer = () => {
  const [PhaseNum, setPhaseNum] = useState(1);

  const nextStep = () => {
    setPhaseNum((prevState) => prevState + 1);
  };
  const prevStep = () => {
    setPhaseNum((prevState) => prevState - 1);
  };

  const changeForm = () => {
    switch (PhaseNum) {
      case 1:
        return (
          <TopicContent
            nextStep={nextStep}
            prevStep={prevStep}
            topics={topics.first}
          />
        );
      case 2:
        return (
          <TopicContent
            nextStep={nextStep}
            prevStep={prevStep}
            topics={topics.second}
          />
        );
      case 3:
        return (
          <TopicContent
            nextStep={nextStep}
            prevStep={prevStep}
            topics={topics.third}
          />
        );
      case 4:
        return (
          <TopicContent
            nextStep={nextStep}
            prevStep={prevStep}
            topics={topics.fourth}
          />
        );
      case 5:
        return (
          <TopicContent
            nextStep={nextStep}
            prevStep={prevStep}
            topics={topics.fifth}
          />
        );
      case 6:
        return (
          <TopicContent
            nextStep={nextStep}
            prevStep={prevStep}
            topics={topics.sixth}
          />
        );
      default:
        break;
    }
  };
  return (
    <div className="mt-10 course-topic">
      <Phase PhaseNum={PhaseNum} PhaseList={PhaseList} />
      {changeForm()}
    </div>
  );
};

export default Coursetopiccontainer;

const topics = {
  first: [
    {
      title: "جلسه اول: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 3 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 4 },
      ],
    },
    {
      title: "جلسه دوم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه سوم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه چهارم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
  ],
  second: [
    {
      title: "جلسه اول: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه دوم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه سوم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه چهارم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
  ],
  third: [
    {
      title: "جلسه اول: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه دوم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه سوم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه چهارم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
  ],
  fourth: [
    {
      title: "جلسه اول: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه دوم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه سوم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه چهارم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
  ],
  fifth: [
    {
      title: "جلسه اول: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه دوم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه سوم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه چهارم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
  ],
  sixth: [
    {
      title: "جلسه اول: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه دوم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه سوم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
    {
      title: "جلسه چهارم: آشنایی",
      videos: [
        { vidTitle: "پایتون چیست؟", vidTime: "04:33", num: 1 },
        { vidTitle: "چرا پایتون؟", vidTime: "04:33", num: 2 },
      ],
    },
  ],
};
