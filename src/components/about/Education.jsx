import "./education.css";
import Card from "./Card";
import { RiGraduationCapLine } from "react-icons/ri";
import { SlWrench } from "react-icons/sl";

const Data = [
  {
    id: 1,
    category: "education",
    icon: <RiGraduationCapLine className="icon-education" />,
    year: "در حال تحصیل ...",
    title: "کارشناسی مهندسی کامپیوتر",
    desc: "دانشگاه پیام نور",
  },
  {
    id: 2,
    category: "education",
    icon: <SlWrench className="icon-education" />,
    year: "1402",
    title: "ICDL",
    desc: "مدرک ICDL آموزشگاه فنی حرفه ای",
  },
];

const Resume = () => {
  return (
    <div className="education grid">
      {Data.map((val, id) => {
        return (
          <Card
            key={id}
            icon={val.icon}
            title={val.title}
            year={val.year}
            desc={val.desc}
          />
        );
      })}
    </div>
  );
};

export default Resume;
