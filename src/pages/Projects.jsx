import "./projects.css";
import "swiper/css";
import CardProject from "../components/projects/CardProject";

const Projects = () => {
  return (
    <section className="projects container section" id="projects">
      <h2 className="section__title">پروژه ها</h2>

      <CardProject />
    </section>
  );
};

export default Projects;
