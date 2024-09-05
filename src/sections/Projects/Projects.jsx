import styles from './ProjectsStyles.module.css';
import Clock from '../../assets/clock.png';
import Currency from '../../assets/Currency.png';
import Apexium from '../../assets/Apexium.png';
import Password from '../../assets/Password.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Password}
          link="https://github.com/Malik4560/password_generator"
          h3="Password Generator"
          p="Generate Strong Password"
        />
        <ProjectCard
          src={Currency}
          link="https://github.com/Malik4560/CurrencyConverter"
          h3="Currency Convert"
          p="Currency Converter"
        />
        <ProjectCard
          src={Apexium}
          link="https://github.com/Malik4560/React_Router"
          h3="Apexium360"
          p="Social Media Marketing"
        />
        <ProjectCard
          src={Clock}
          link="https://github.com/Malik4560/Clock"
          h3="Clock"
          p="Analog clock"
        />
      </div>
    </section>
  );
}

export default Projects;