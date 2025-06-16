import "./education.css";
import Data from "./Data";
import Card from "./Card";

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
