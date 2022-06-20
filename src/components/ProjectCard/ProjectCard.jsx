import { ExternalLinkIcon, GitHubIcon } from '../PortfolioIcons/PortfolioIcons';
import './ProjectCard.css';
export default function ProjectCard({ project }) {
  return (
    <article className='ProjectCard'>
      <img src={`${process.env.PUBLIC_URL}${project.imagePath}`} alt={project.name} className='project-image' />
      <h2 className='project-name'>{project.name}</h2>
      <p className='project-description'>{project.description}</p>
      <section className='project-links'>
        <a href={project.githubLink}>
          <GitHubIcon />
          <p>GitHub</p>
        </a>
        <a href={project.deployedLink}>
          <ExternalLinkIcon />
          <p>Deployed</p>
        </a>
      </section>
    </article>
  );
}