import React from "react";
import "./App.css";
import profile from "./assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";


function App() {
  return (
    <div className="container">

      {/* NAVBAR */}
      <nav className="navbar">
  <div className="logo">
    <h2>Kavitha<span style={{color:"#fff"}}>.</span></h2>
  </div>

  <div className="nav-links">
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#internship">Internship</a>
    <a href="#education">Education</a>
    <a href="#volunteer">Volunteer</a>
    <a href="#contact">Contact</a>
  </div>
</nav>


      {/* HERO */}
      <section className="hero">
        <img src={profile} alt="Kavitha" className="profile-img" />
        <h1>
  <Typewriter
    words={["Kavitha H Seervi"]}
    loop={false}
    cursor
    cursorStyle="|"
    typeSpeed={90}
    deleteSpeed={50}
    delaySpeed={1000}
  />
</h1>

        <p className="role">
  <Typewriter
    words={[
      "Aspiring Data Analyst",
      "Python Developer",
      "Machine Learning Enthusiast"
    ]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={40}
    delaySpeed={1500}
  />
</p>


        <div className="buttons">
          <a href="#contact" className="btn primary">Contact Me</a>
          <a 
            href="https://linkedin.com/in/kavithahseervi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            LinkedIn
          </a>
          <a href="/resume.pdf" download className="btn primary">
            Download Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
         AI & Data Science engineering student skilled in Java, SQL, and Python with problem-solving abilities.
          Hands-on experience building practical software and data-driven solutions. 
          Seeking opportunities to apply technical skills and deliver value across software, data, or AI roles.

        </p>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <h2>Skills</h2>
        <div className="skills">
          <span>Java</span>
          <span>Python</span>
          <span>SQL</span>
          <span>Pandas</span>
          <span>NumPy</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <h2>Projects</h2>

        <div className="project-card">
  <h3>AI-Powered Chatbot Web Application</h3>

  <p>
    A full-stack AI chatbot application built using the MERN stack that enables
    users to interact with an intelligent conversational assistant in real time.
    The application supports secure authentication, persistent chat history,
    and seamless integration with OpenAI APIs.
  </p>

  <ul className="project-details">
    <li>Implemented JWT-based authentication and Google OAuth login.</li>
    <li>Integrated OpenAI API for generating AI-driven responses.</li>
    <li>Stored chat history securely in MongoDB database.</li>
    <li>Designed a fully responsive and modern UI using React.</li>
  </ul>

  <div className="tech-stack">
    <span>React</span>
    <span>Node.js</span>
    <span>Express</span>
    <span>MongoDB</span>
    <span>OpenAI API</span>
  </div>

  <a href="#" className="project-btn">GitHub</a>
</div>


        <div className="project-card">
  <h3>Real-Time Object Detection Android App</h3>

  <p>
    An offline Android application designed to detect objects in real time
    using YOLOv8-TFLite model. The application enhances accessibility by
    combining object detection with Optical Character Recognition (OCR)
    and Text-to-Speech functionality.
  </p>

  <ul className="project-details">
    <li>Integrated YOLOv8-TFLite for efficient on-device inference.</li>
    <li>Implemented OCR to extract readable text from detected objects.</li>
    <li>Added Text-to-Speech support for accessibility assistance.</li>
    <li>Optimized performance for low-resource mobile environments.</li>
  </ul>

  <div className="tech-stack">
    <span>Java</span>
    <span>YOLOv8</span>
    <span>TFLite</span>
    <span>OCR</span>
    <span>TTS</span>
  </div>

  <a href="#" className="project-btn">GitHub</a>
</div>


      </section>
      {/* INTERNSHIP SECTION */}
<section className="section" id="internship">
  <h2>Internship & Technical Training</h2>

  <div className="project-card">
    <h3>Data Science Intern – Take It Smart (OPC) Pvt. Ltd.</h3>


    <p className="internship-meta">
       Feb 2026 – May 2026 | Virtual
    </p>

    <p>
      Participating in a structured technical training program focused on
      Data Science and Machine Learning. Gaining hands-on exposure to
      real-world datasets, data preprocessing techniques, analytical methods,
      and model development workflows.
    </p>

    <p>
      Continuously enhancing practical knowledge in Python-based data analysis,
      statistical concepts, and applied machine learning through guided projects
      and implementation-based learning.
    </p>

    <div className="tech-stack">
      <span>Python</span>
      <span>Data Analysis</span>
      <span>Machine Learning</span>
      <span>Model Development</span>
      <span>Data Visualization</span>
    </div>
  </div>
</section>
{/* VOLUNTEER EXPERIENCE SECTION */}
<section className="section" id="volunteer">
  <h2>Volunteer Experience</h2>

  <div className="project-card">
    <h3>NSS Volunteer – National Service Scheme</h3>

    <p className="internship-meta">
      GSSSIETW
    </p>

    <p>
      Actively participated in community outreach and social awareness
      initiatives under the National Service Scheme (NSS). Contributed
      to programs aimed at promoting education, environmental sustainability,
      and civic responsibility.
    </p>

    <ul className="project-details">
      <li>Conducted educational sessions for students in government schools.</li>
      <li>Participated in Swachh Bharat and cleanliness drives.</li>
      <li>Promoted water conservation and environmental awareness campaigns.</li>
      <li>Organized digital payment awareness programs in rural communities.</li>
      <li>Visited historical and heritage sites as part of cultural engagement activities.</li>
    </ul>
  </div>
</section>




      {/* EDUCATION */}
      <section className="section" id="education">
        <h2>Education</h2>
        <p><strong>B.E in Artificial Intelligence & Data Science</strong></p>
        <p>GSSS Institute of Engineering and Technology for Women</p>
        <p>CGPA: 8.75</p>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>📞 <a href="tel:+918147167500">+91 8147167500</a></p>
        <p>📧 <a href="mailto:kavithahseervi8147@gmail.com">kavithahseervi8147@gmail.com</a></p>
        <p>
          🔗 <a href="https://linkedin.com/in/kavithahseervi" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/kavithahseervi
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © Kavitha H Seervi | Built with React
      </footer>

    </div>
  );
}

export default App;
