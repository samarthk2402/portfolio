const Project = ({ imgSrc, imgAlt, projectSrc }) => {
  return (
    <div className="project">
      <a href={projectSrc}>
        <img className="projectImage" src={imgSrc} alt={imgAlt} />
      </a>
    </div>
  );
};

export default Project;
