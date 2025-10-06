import "./Contact.css"
import contactImg from "/src/images/contact-network.jpg" 
import { Mail, Phone, Globe, MapPin } from "lucide-react"


export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={contactImg} alt="Contact" />
      </div>

      <div className="contact-info">
        <h1>Get in <span className="highlight">Touch</span></h1>

        <div className="contact-item">
          <Mail className="icon" />
          <span>erickwanjohi@gmail.com</span>
        </div>

        <div className="contact-item">
          <Phone className="icon" />
          <span>+254-741-352-159</span>
        </div>

        <div className="contact-item">
          <Globe className="icon" />
          <span>www.essentiadesignltd.com</span>
        </div>

        <div className="contact-item">
          <MapPin className="icon" />
          <span>Nairobi, Kenya</span>
        </div>
      </div>
    </div>
  )
}

