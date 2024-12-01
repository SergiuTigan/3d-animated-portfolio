import { useState } from "react";
import { motion } from "framer-motion";
import "./projectViewer.scss";

const ProjectViewer = ({ project, onClose }) => {
  if (!project) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="projectViewer-backdrop" onClick={onClose}>
      <motion.div
        className="projectViewer-modal"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="projectViewer-header">
          <h2>{project.title}</h2>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="projectViewer-body">
          <div className="projectViewer-img">
            <img src={project.img} alt={project.title} />
          </div>
          <div className="projectViewer-info">
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>Go to Project</button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectViewer;
