import React, {useEffect} from "react";
import "aos/dist/aos.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Carousel } from "react-bootstrap";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { navbar } from "@material-tailwind/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";



ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

gsap.registerPlugin(ScrollTrigger);


const CrimeChart = () => {
  const data = {
    labels: [
      "Cruelty by Husband/Relatives",
      "Assault on Women",
      "Kidnapping & Abduction",
      "Rape",
      "Dowry Deaths",
      "Other Crimes",
    ],
    datasets: [
      {
        label: "Cases Reported (2022)",
        data: [134983, 105034, 93787, 31516, 6589, 73347], // NCRB Statistics
        backgroundColor: [
          "#42A5F5", // Blue
          "#5C6BC0", // Purple
          "#26C6DA", // Cyan
          "#FF7043", // Orange
          "#D32F2F", // Red
          "#7E57C2", // Deep Purple
        ],
        borderColor: "#333",
        borderWidth: 1,
      },
    ],
  };


  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Crimes Against Women in India (2022 - NCRB Data)",
        font: { size: 18 },
      },
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="container my-5" id="crime-chart">
      <h2 className="text-center mb-4">Crime Statistics (India 2022)</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

const images = [
  "https://www.msijanakpuri.com/wp-content/uploads/2019/06/stop-violence-against-women-.jpg",
  "safe3.jpg",
  "https://images.yourstory.com/cs/wordpress/2017/03/Featured-image-7-1.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75",
  "https://wl-brightside.cf.tsp.li/resize/728x/jpg/b0f/def/a1a2a051c29e86d340c251b69e.jpg",
  "https://lxme.in/wp-content/uploads/2024/05/Self-defense.png",

];
const resources = [
  {
    title: "Women's Safety Courses",
    description: "Free online courses to learn about self-defense, safety awareness, and personal safety.",
    link: "#",
  },
  {
    title: "Domestic Violence Support",
    description: "Reach out for immediate assistance with domestic violence and abusive relationships.",
    link: "#",
  },
  {
    title: "Self-Defense Techniques",
    description: "Learn self-defense techniques and strategies through videos and tutorials.",
    link: "#",
  },
  {
    title: "Emergency Contacts & Hotlines",
    description: "List of emergency contacts including police, shelters, and hotlines.",
    link: "#",
  },
  {
    title: "Personal Safety Tips",
    description: "Helpful safety tips for women to stay alert and safe in various environments.",
    link: "#",
  },
];



const Home = () => {
  useEffect(() => {
    gsap.utils.toArray(".animate-section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      });
    });
  }, []);
  return (
    <div className="App" id="home">
      <header className="text-center text-white">
      <Carousel interval={2000}>
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" style={{height: "700px"}} src={img} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      </header>
      <section className="py-5" >
      <div className="container text-center">
        <h2 className="fw-bold mb-4" style={{ fontSize: "50px", color: "rgb(169 54 15)"}}>RESOURCES FOR WOMEN'S SAFETY</h2>
        <div className="row justify-content-center">
          {resources.map((resource, index) => (
            <div key={index} className="col-md-4 col-lg-3 mb-4">
              <div className="card shadow-lg border-0 p-4 text-center">
                <h5 className="fw-bold">{resource.title}</h5>
                <p className="text-muted">{resource.description}</p>
                <a href="#" className="btn btn-info text-white">
                  <Link to="/stories" className="btn btn-info text-white">
                    Go to Resource
                  </Link>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="container py-5 text-center">
      <h1 className="fw-bold" style={{ fontSize: "50px", color: "rgb(169 54 15)" }}>1 in 4 females</h1>
      <div>
        <p className="fs-4">
          Globally, almost one in four women have experienced physical and/or sexual violence at least once in their life.
          This violence is often perpetrated by current or former intimate partners.
        </p>
        <div>
          <img src="safe2.png" alt="Safety Awareness" className="img-fluid" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      </div>
    </section>

      <section>
        <div>
          <div className="container text-center">
            <h1 className="fw-bold" style={{ fontSize: "50px", color: "rgb(169 54 15)" }}>Policies, laws and budgets</h1>
            <p style={{fontSize: "30px"}}>These are essential tools for ending violence against women, but they are <br />only effective when implemented and enforced in compliance with <br />
             international standards and recommendations. </p>
             <img src="http://ncw.nic.in/sites/all/themes/ncw/images/popup.png" alt=""/>
          </div>

        </div>
      </section>

      <section>
        <div>
          <div className="container text-center">
            <h1 className="fw-bold" style={{ fontSize: "50px", color: "rgb(169 54 15)"}}>What are countries doing to address violence against women?</h1>
            <h1 style={{color: "rgb(44 7 214)"}}>Legislation</h1>
            <p style={{fontSize: "25px"}}>There are 1,583 legislative measures across 193 countries to address violence against women. </p>
      <h2 className="text-center mb-4">Forms of Violence Against Women</h2>
        </div>
        </div>
      </section>
      <CrimeChart />

      <section>
        <div className="container-fluid my-5" style={{
        backgroundColor: "#F7F2EE",
        padding: "50px 0",
      }}>
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-md-6 text-center">
            <img
              src="safe4.png" 
              alt="World Map"
              className="img-fluid"
              padding-top="20px"
              style={{ maxWidth: "80%", maxHeight: "80%" }}
            />
          </div>

          <div className="col-md-6 ">
            <h3 className="text-primary fw-bold">Support Services</h3>
            <h2 className="fw-bold">Share Location with your family</h2>
            <p className="text-muted" style={{ fontSize: "20px" }}>
              Provided training to the police to support survivors of violence
              against women.
            </p>
            <a href="#" className="btn btn-primary">
              <></>Learn More
            </a>
          </div>
        </div>
      </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white text-center py-5">
        <h2 className="fw-bold">Join Our Community</h2>
        <p>Sign up for workshops, safety training, and support groups.</p>
        <a href="#" className="btn btn-light">
          <Link to="/login" className="btn btn-info text-white">
            Sign Up Now
          </Link>
        </a>
      </section>

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

        {/* Social Media Links */}
        <div className="mt-3">
          <a href="#" src="" className="text-light mx-2"><Link></Link><i className="bi bi-facebook fs-4"></i></a>
          <a href="#" className="text-light mx-2"><i className="bi bi-twitter fs-4"></i></a>
          <a href="#" className="text-light mx-2"><i className="bi bi-instagram fs-4"></i></a>
          <a href="#" className="text-light mx-2"><i className="bi bi-linkedin fs-4"></i></a>
        </div>
        <div className="mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} SafeHaven. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default Home;
