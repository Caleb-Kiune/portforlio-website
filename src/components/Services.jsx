import "./Services.css"

export default function Services() {
  return (
    <div className="services-container">
      <div className="services-header-container">
        <h1 className="services-header">Our Services</h1>
        <p className="services-description">
          We don’t just create spaces, we craft experiences where design, function, and detail work seamlessly.
        </p>
      </div>

      <div className="services-body">
        <div className="service-card">
          <div className="image-wrapper">
            <img src="src/images/interior-design.png" alt="Interior Design" />
          </div>
          <h1 className="interior-design-header">INTERIOR DESIGN</h1>
          <p className="interior-design-description">
            We take projects from concept to completion, handling planning, coordination, and execution with precision
            and creativity.
          </p>
        </div>

        <div className="service-card">
          <div className="image-wrapper">
            <img src="/src/images/project-management.png" alt="Project Management" />
          </div>
          <h1 className="project-management-header">PROJECT MANAGEMENT</h1>
          <p className="project-management-description">
            We take projects from concept to completion, handling planning, coordination, and execution with precision
            and creativity.
          </p>
        </div>

        <div className="service-card">
          <div className="image-wrapper">
            <img src="/src/images/project-management.png" alt="Consultancy" className="img.project-management-image"/>
          </div>
          <h1 className="consultancy-header">CONSULTANCY</h1>
          <p className="consultancy-description">
            We take projects from concept to completion, handling planning, coordination, and execution with precision
            and creativity.
          </p>
        </div>
      </div>
    </div>
  );
}
