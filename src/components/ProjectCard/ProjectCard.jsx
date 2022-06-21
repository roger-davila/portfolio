import { ExternalLinkIcon, GitHubIcon } from '../PortfolioIcons/PortfolioIcons';
import './ProjectCard.css';
export default function ProjectCard({ project }) {
  return (
    <article className='ProjectCard'>
      <img src={`${process.env.PUBLIC_URL}${project.imagePath}`} alt={project.name} className='project-image' />
      <h2 className='project-name'>{project.name}</h2>
      <p className='project-description'>{project.description}</p>
      <section className='project-links'>
        <div>
          <a href={project.githubLink}>
            <GitHubIcon classString='link-icon' />
            <p>GitHub</p>
          </a>
        </div>
        <div>
          <a href={project.deployedLink}>
            <ExternalLinkIcon classString='link-icon' />
            <p>Deployed</p>
          </a>
        </div>
      </section>
    </article>
  );
}