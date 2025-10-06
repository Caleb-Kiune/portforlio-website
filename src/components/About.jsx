import "./About.css"

export default function About() {
  return(
    <div className="about-container">
      <div className="about-left">
          <h1 className="about-welcome">Welcome to</h1>
          <h1 className="about-header">Essentia Designs</h1>
          <p className="about-description">
            Essentia Designs is a full-service interior design
            organization dedicated to transforming spaces into
            timeless expressions of style, function, and identity.
            Guided by innovation, precision, and a deep
            understanding of our clients’ vision, we deliver designs
            that don’t just look good, but live well.
          </p>
          <div className="about-profile-block">
              <img src="src/images/profile-pic.JPG" className="about-profile-pic" />
              <h1 className="principal-name">ERICK M. WANJOHI</h1>
              <h1 className="principal-description">Founder & Principal Designer</h1>
          </div>
         
      </div>

      <div className="about-right">
          <img src="src/images/mission-vision.png" className="about-mission-pic"/>
          <h1 className="about-vision">Vision</h1>
          <p className="about-vision-statement">
            To be the leading force in redefining interior spaces across the world,
            blending creativity and functionality to shape environments that inspire,
            empower, and endure
          </p>
          <h1 className="about-mission">Mission</h1>
          <p className="about-mission-statement">
            Essentia Designs Ltd is driven to redefine how people experience space.
            Creating interiors that balance beauty, function, and identity, so every
            home and business reflects its true essence while inspiring those who live
            and work within.
          </p>
      </div>
    </div>
  )
}