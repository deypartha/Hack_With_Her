import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const About = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const teamMembers = [
        {
          name: "Shivam Kumar",
          role: "Designer",
          icon: "fas fa-pencil-alt",
          phone: "+91 9876543210",
          email: "shivam@example.com",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Partha Dey",
          role: "Developer",
          icon: "fas fa-code",
          phone: "+91 6297571084",
          email: "partha222004@gmail.com",
          image: "my_image.jpg",
        },
        {
          name: "Samridhi Nagpal",
          role: "Manager",
          icon: "fas fa-handshake",
          phone: "+91 9876543212",
          email: "samridhi@example.com",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Kirti",
          role: "Marketing",
          icon: "fas fa-project-diagram",
          phone: "+91 9034050401",
          email: "kirti1330.be23@chitkara.edu.in",
          image: "https://via.placeholder.com/150",
        },
      ];

      const handleShow = (member) => {
        setSelectedMember(member);
        setShowModal(true);
      };
    
  return (
    <>
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">About Us</h2>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <p className="lead">
              At <strong>SafeHaven</strong>, we are committed to providing a secure platform that prioritizes safety, security, and well-being. Our mission is to empower individuals with resources, support, and innovative solutions for a safer community.
            </p>
            <p className="lead">
              Our team of dedicated professionals works tirelessly to create a world where security and accessibility go hand in hand. We believe that technology should be used for good, ensuring that everyone, regardless of their background, feels safe and protected.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/media/2024/08/17/App-d84c645f28383e407b375f359efcbbd6.jpg?jadewits_media_id=26487"
              alt="Our Team"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      <div className="container my-5 border py-5">
        <h2 className="text-center fw-bold mb-4">Meet Our Team</h2>
        <div className="row text-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-3">
              <div className="p-4 border rounded shadow-sm bg-light">
                <i className={`${member.icon} fa-3x text-danger`}></i>
                <h4 className="mt-3">{member.name}</h4>
                <p className="text-muted">{member.role}</p>
                <Button variant="success" onClick={() => handleShow(member)}>
                Know More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal className="text-center" show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMember?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={selectedMember?.image}
            alt={selectedMember?.name}
            className="img-fluid rounded-circle mb-3"
            style={{ width: "150px", height: "150px" }}
          />
          <h5>{selectedMember?.role}</h5>
          <p>📞 {selectedMember?.phone}</p>
          <p>✉️ {selectedMember?.email}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button id="btn_Close" className="btn" variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <div className="container my-5 py-5">
  <div className="row">
    {/* FAQ Card */}
    <div className="col-md-6">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="text-center fw-bold mb-4">FAQs</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                >
                  What is SafeHaven?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  SafeHaven is a platform designed to enhance security and accessibility for women, ensuring a safe environment through technology.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                >
                  How can I contribute to SafeHaven?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  You can contribute by sharing feedback, reporting issues, or collaborating with our team for development and improvement.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Contact Us Card */}
    <div className="col-md-6">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="text-center fw-bold mb-4">Contact Us</h2>
          <p className="text-center">Have questions or suggestions? Reach out to us!</p>
          <form>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Message</label>
              <textarea className="form-control" rows="4" placeholder="Write your message" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

                <div className="text-center my-5">
            <h2>For any quries</h2>
            <h5>Contact with us <span className="text-primary">safehaven@gmail.com</span></h5>
          </div>
      <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h5>About SafeHaven</h5>
            <p>Empowering women with safety resources, self-defense skills, and emergency support.</p>
          </div>
          <div className="col-md-4 quick-links">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#self-defense" className="text-light text-decoration-none">Self-Defense Tips</a></li>
              <li><a href="#safe-zones" className="text-light text-decoration-none">Find Safe Zones</a></li>
              <li><a href="#emergency-contacts" className="text-light text-decoration-none">Emergency Contacts</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>📍 123 Safety Street, Your City</p>
            <p>📞 <a href="tel:100" className="text-light">100 (Emergency)</a></p>
            <p>✉️ <a href="mailto:support@safehaven.com" className="text-light">support@safehaven.com</a></p>
          </div>
        </div>
        <div className="mt-3">
          <a href="#" className="text-light mx-2"><i className="bi bi-facebook fs-4"></i></a>
          <a href="#" className="text-light mx-2"><i className="bi bi-twitter fs-4"></i></a>
          <a href="#" className="text-light mx-2"><i className="bi bi-instagram fs-4"></i></a>
          <a href="#" className="text-light mx-2"><i className="bi bi-linkedin fs-4"></i></a>
        </div>
        <div className="mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} SafeHaven. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default About;
