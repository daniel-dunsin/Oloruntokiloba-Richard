import React from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { PortfolioModalContainer } from "../styles/components/PortofolioModal.styled";

const PortfolioModal = ({
  projectsModalOpen,
  closeProjectsModal,
  selectedProject,
}: {
  projectsModalOpen: boolean;
  closeProjectsModal: () => void;
  selectedProject: {
    name?: string;
    image: string;
    category: string;
    otherImages: string[];
  };
}) => {
  const [imageCount, setImageCount] = React.useState<number>(0);

  const increaseImageCount = () => {
    if (imageCount === selectedProject.otherImages.length - 1) {
      setImageCount(0);
    } else {
      setImageCount(imageCount + 1);
    }
  };

  const decreaseImageCount = () => {
    if (imageCount === 0) {
      setImageCount(selectedProject.otherImages.length - 1);
    } else {
      setImageCount(imageCount - 1);
    }
  };

  if (!projectsModalOpen) {
    return <></>;
  }
  return (
    <PortfolioModalContainer>
      <span
        className="close-icon"
        onClick={() => {
          closeProjectsModal();
          setImageCount(0);
        }}
      >
        <FaTimes />
      </span>
      <div>
        <div className="image-container">
          <img src={selectedProject.otherImages[imageCount]} alt="" />
        </div>
        <span className="arrow-icon left" onClick={decreaseImageCount}>
          <FaChevronLeft />
        </span>
        <span className="arrow-icon right" onClick={increaseImageCount}>
          <FaChevronRight />
        </span>
      </div>
    </PortfolioModalContainer>
  );
};

export default PortfolioModal;
