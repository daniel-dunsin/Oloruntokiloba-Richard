import React, { useEffect, useState } from 'react';
import { BsFullscreen } from 'react-icons/bs';
import { FaCamera } from 'react-icons/fa';
import PortfolioModal from '../components/PortfolioModal';
import Title from '../components/Title';
import { projects } from '../static/portfolios';
import { PortfolioContainer } from '../styles/pages/Portfolio.styled';

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState([...projects]);
  const [filterButtons, setFilterButtons] = useState<string[]>([]);
  const [selectedFilterButton, setSelectedFilterButton] =
    useState<string>('All');
  const [projectsModalOpen, setProjectsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<{
    name?: string;
    image: string;
    category: string;
    otherImages: string[];
  }>({ name: '', image: '', category: '', otherImages: [] });

  const closeProjectsModal = (): void => {
    setProjectsModalOpen(false);
  };
  const openProjectsModal = (): void => {
    setProjectsModalOpen(true);
  };

  useEffect(() => {
    setFilterButtons(() => {
      const projectsCategory = projects.reduce(
        (acc, curr) => {
          if (!acc.includes(curr.category)) {
            acc.push(curr.category);
          }
          return acc;
        },
        ['All']
      );
      return projectsCategory;
    });
  }, []);

  useEffect(() => {
    if (selectedFilterButton === 'All') {
      setFilteredProjects([...projects]);
    } else {
      setFilteredProjects(
        [...projects].filter(
          (project) => project.category === selectedFilterButton
        )
      );
    }
  }, [selectedFilterButton]);

  return (
    <PortfolioContainer>
      <header className='header'>
        <Title text='Portfolio' />
        <p>Check out some of my projects below</p>
      </header>

      <div className='filter-btns-container'>
        {filterButtons.map((button: string, index: number) => {
          return (
            <button
              key={index}
              className={`filter-btn ${
                selectedFilterButton === button && 'selected-filter-btn'
              }`}
              onClick={() => {
                setSelectedFilterButton(button);
              }}
            >
              {button}
            </button>
          );
        })}
      </div>

      <div className='projects-container'>
        {filteredProjects.map((project, index: number) => {
          return (
            <article key={index} className='single-project'>
              <div className='image-container'>
                <img
                  src={project.image}
                  loading='lazy'
                  alt={project.name as string}
                />
                <div className='hover-container'>
                  <div
                    onClick={() => {
                      setSelectedProject(project);
                      setProjectsModalOpen(true);
                    }}
                  >
                    View{' '}
                    <span>
                      <BsFullscreen />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <PortfolioModal
        closeProjectsModal={closeProjectsModal}
        projectsModalOpen={projectsModalOpen}
        selectedProject={selectedProject}
      />
    </PortfolioContainer>
  );
};

export default Portfolio;
