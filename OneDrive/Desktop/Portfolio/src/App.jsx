import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-logo">PCG.</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">COMPUTER SCIENCE &amp; DATA SCIENCE</p>

          <h1>
            Preethika
            <span>Chowdary Gundavarapu</span>
          </h1>

          <h2>
            Computer Science &amp; Engineering Student
            <span> · AI/ML · Data Science · Web Development</span>
          </h2>

          <p className="hero-description">
            I’m Preethika Chowdary Gundavarapu, a Computer Science and
            Engineering student at VIT-AP University and a BS Data Science and
            Applications student at IIT Madras. My interests span{" "}
            <strong>Artificial Intelligence, Machine Learning, Data Science,
            and Full-Stack Web Development</strong>.
          </p>

          <div className="hero-buttons">
            <a
              href="https://github.com/PreethikaChowdary"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/preethika-chowdary-gundavarapu"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-badge">
          <div className="badge-inner">
            <span>AI</span>
            <span>ML</span>
            <span>WEB</span>
            <span>DS</span>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section" id="about">
        <div className="section-heading">
          <span>01</span>
          <h2>About</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I’m <strong>Preethika Chowdary Gundavarapu</strong>, a Computer
              Science and Engineering student at VIT-AP University and a BS
              Data Science and Applications student at IIT Madras.
            </p>

            <p>
              My interests span <strong>Artificial Intelligence, Machine
              Learning, Data Science, and Full-Stack Web Development</strong>.
              I enjoy building practical applications, working with
              data-driven systems, developing APIs, and exploring LLM-based
              applications.
            </p>

            <p>
              I also gained corporate exposure as a{" "}
              <strong>Technical Intern at Cisco</strong> in the Distributed
              Systems Engineering Business Unit during the summer at the end
              of my second year of B.Tech.
            </p>

            <p>
              I enjoy turning ideas into practical applications and
              continuously improving my problem-solving and development skills.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <strong>9.64</strong>
              <span>VIT-AP CGPA by the end of 2nd Year</span>
            </div>

            <div className="stat-card">
              <strong>8.00</strong>
              <span>IIT Madras CGPA</span>
            </div>

            
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="section" id="education">
        <div className="section-heading">
          <span>02</span>
          <h2>Education</h2>
        </div>

        <div className="education-grid">
          <div className="education-card">
            <div className="education-year">2024 — 2028</div>
            <h3>VIT-AP University</h3>
            <p>Bachelor of Technology in Computer Science and Engineering</p>
            <strong>CGPA: 9.64</strong>
          </div>

          <div className="education-card">
            <div className="education-year">2024 — 2028</div>
            <h3>Indian Institute of Technology, Madras</h3>
            <p>BS in Data Science and Applications</p>
            <strong>CGPA: 8.00</strong>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="section" id="skills">
        <div className="section-heading">
          <span>03</span>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Artificial Intelligence</h3>
            <div className="skill-tags">
              <span>LLM Applications</span>
              <span>Prompt Engineering</span>
              <span>AI APIs</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Machine Learning</h3>
            <div className="skill-tags">
              <span>Scikit-learn</span>
              <span>Feature Engineering</span>
              <span>Model Evaluation</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Data Science</h3>
            <div className="skill-tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Data Analysis</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Full-Stack Web Development</h3>
            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Vue.js</span>
              <span>Flask</span>
              <span>FastAPI</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Programming</h3>
            <div className="skill-tags">
              <span>Python</span>
              <span>Java</span>
              <span>DSA</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Databases &amp; APIs</h3>
            <div className="skill-tags">
              <span>SQL</span>
              <span>SQLite</span>
              <span>SQLAlchemy</span>
              <span>REST APIs</span>
              <span>JSON</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="section" id="projects">
        <div className="section-heading">
          <span>04</span>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card featured">
            <div className="project-number">01</div>
            <h3>Trekking Management Application V2</h3>
            <p>
              Full-stack trekking management platform with role-based access,
              JWT authentication, Redis caching, Celery background jobs,
              analytics, booking management, and a Vue.js SPA.
            </p>
            <div className="tags">
              <span>Flask</span>
              <span>Vue.js</span>
              <span>Redis</span>
              <span>Celery</span>
              <span>SQLAlchemy</span>
              <span>JWT</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>
            <h3>Placement Portal Application</h3>
            <p>
              Full-stack placement management system supporting Admin,
              Company, and Student roles with placement drives, applications,
              resume uploads, REST APIs, and analytics dashboards.
            </p>
            <div className="tags">
              <span>Python</span>
              <span>Flask</span>
              <span>SQLite</span>
              <span>Bootstrap</span>
              <span>Chart.js</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>
            <h3>Comment Classification System</h3>
            <p>
              Machine learning classification system built on approximately
              198,000 comments using extensive preprocessing, TF-IDF feature
              engineering, model comparison, and hyperparameter tuning.
            </p>
            <div className="tags">
              <span>Python</span>
              <span>Scikit-learn</span>
              <span>TF-IDF</span>
              <span>LightGBM</span>
              <span>SVM</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">04</div>
            <h3>LLM-Based Automated Quiz Solver API</h3>
            <p>
              Automated API capable of handling dynamic data science quizzes
              using LLM-based reasoning, browser automation, data processing,
              external data retrieval, and automated submission.
            </p>
            <div className="tags">
              <span>FastAPI</span>
              <span>LLM</span>
              <span>Playwright</span>
              <span>Pandas</span>
              <span>REST API</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">05</div>
            <h3>FastAPI Backend Deployment</h3>
            <p>
              RESTful backend service designed with FastAPI, deployed publicly
              and tested using Swagger UI and automated evaluation workflows.
            </p>
            <div className="tags">
              <span>FastAPI</span>
              <span>Python</span>
              <span>REST API</span>
              <span>Render</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">06</div>
            <h3>Business Data Management</h3>
            <p>
              End-to-end business analytics case study for a cement dealership,
              analysing operational and financial data to identify challenges
              and develop practical data-driven recommendations.
            </p>
            <div className="tags">
              <span>Excel</span>
              <span>Business Analytics</span>
              <span>Pivot Tables</span>
              <span>Data Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="section" id="experience">
        <div className="section-heading">
          <span>05</span>
          <h2>Experience</h2>
        </div>

        <div className="experience-card">
          <div className="experience-top">
            <div>
              <div className="experience-label">TECHNICAL INTERNSHIP</div>
              <h3>Cisco</h3>
              <p>Distributed Systems Engineering Business Unit</p>
            </div>

            <div className="experience-date">
              Summer 2026 · June 2026 - July 2026
            </div>
          </div>

          <p>
            Gained corporate exposure to real-world software engineering,
            engineering workflows, collaboration across teams, and scalable
            software solutions during my technical internship at Cisco.
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <p className="eyebrow">06 / CONTACT</p>

        <h2>
          Let’s build something
          <span> meaningful.</span>
        </h2>

        <p>
          I’m always interested in learning, building practical solutions,
          and exploring opportunities across AI, data and software
          development.
        </p>

        <div className="contact-links">
          <a href="mailto:preethikachowdary01@gmail.com">
            Email ↗
          </a>

          <a
            href="https://github.com/PreethikaChowdary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/preethika-chowdary-gundavarapu"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 Preethika Chowdary Gundavarapu</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  );
}

export default App;