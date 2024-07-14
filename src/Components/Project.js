const Project = ({ imgSrc, imgAlt, projectSrc, projectInfo }) => {
  return (
    <div className="project">
      <a href={projectSrc}>
        <img className="projectImage" src={imgSrc} alt={imgAlt} />
      </a>
      <div className="projectInfo">
        <p className="projectInfoText">{projectInfo}</p>
      </div>
    </div>
  );
};

export default Project;
