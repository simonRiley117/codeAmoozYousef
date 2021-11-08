import React from "react";
import BreadCrump from "@Components/Shared/BreadCrump/Breadcrump";
import { Link } from "react-router-dom";

function index() {
  return (
    <div className="Technicalteam container">
      <BreadCrump item={menu} />
      <p className="Master__title text-center">Technical team</p>

      <div className="Technicalteam__content">
        {items.map((item, id) => (
          <div
            className="Technicalteam__Box flex justify-between items-center w-full"
            key={id}
          >
            <div className="Technicalteam__txt flex items-center justify-between">
              <p>
                {" "}
                <Link
                  to={{
                    pathname: `/coWorkers/technicalteam/${item.title.replace(
                      / +/g,
                      ""
                    )}`,
                    state: {
                      title: item.title,
                    },
                  }}
                >
                  Details
                </Link>{" "}
              </p>

              <p>{item.level}</p>
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
const menu = [
  {
    name: "صفحه اصلی",
    rout: "",
  },
  {
    name: "همکاران و اساتید",
    rout: "coWorkers",
  },
  {
    name: "technical Team",
    rout: "coWorkers/technicalteam",
  },
];

const items = [
  {
    title: "Front-End developer",
    level: "Senior",
  },
  {
    title: "Back-End developer",
    level: "Senior",
  },
  {
    title: "UX designer",
    level: "Beginner",
  },
  {
    title: "UI designer",
    level: "Intern",
  },
  {
    title: "JavaScript Developer",
    level: "Senior",
  },
  {
    title: "Software engineer",
    level: "Senior",
  },
  {
    title: "UX researcher",
    level: "Beginner",
  },
  {
    title: "UX writer",
    level: "Intern",
  },
];
