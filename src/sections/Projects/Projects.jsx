import diction from '../../assets/diction.png';
import themwe from '../../assets/themwe.png';
import viberr from '../../assets/viberr.png';
import way from '../../assets/way.png';
import ProjectCard from '../../common/ProjectCard';
import styles from './ProjectsStyles.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/D-Yakubov/Social-Media-App-API"
          h3="Social Life"
          p="Social Media App API"
        />
        <ProjectCard
          src={diction}
          link="https://github.com/D-Yakubov/Django-mini-project"
          h3="Diction"
          p="Simple dictionary website"
        />
        <ProjectCard
          src={themwe}
          link="https://github.com/D-Yakubov/DjangoVueProject"
          h3="theMWE.tech"
          p="LMS App"
        />
        <ProjectCard
          src={way}
          link="https://github.com/D-Yakubov/Programming-HandBookSolutionsAbramyan"
          h3="Way"
          p="Open Source repo"
        />
      </div>
    </section>
  );
}

export default Projects;
