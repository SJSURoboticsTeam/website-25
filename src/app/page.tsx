export default function Home() {
  return (
    <div className="page">
      {/* Hero with Video Background */}
      <section className="hero-video">
        <video
          className="hero-video-bg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/broll.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
        <div className="hero-video-content container">
          <h1 className="hero-tagline">
            Building the future of planetary exploration
          </h1>
        </div>
      </section>

      {/* URC Section */}
      <section id="urc">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Competition</p>
              <h2 className="section-title">University Rover Challenge</h2>
              <p className="body-text mb-lg">
                The URC is the world&apos;s premier robotics competition for university students.
                Held annually in the Utah desert, teams design and build Mars rovers to complete
                tasks that simulate real planetary exploration.
              </p>
              <ul className="dash-list">
                <li className="dash-item">Extreme terrain mobility — slopes, rocks, and loose soil</li>
                <li className="dash-item">Science and life detection with onboard instruments</li>
                <li className="dash-item">Equipment servicing — levers, switches, valves</li>
                <li className="dash-item">Autonomous navigation through waypoints</li>
              </ul>
            </div>
            <div>
              <EarthGlobe />
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section id="divisions">
        <div className="container">
          <p className="eyebrow">Team Structure</p>
          <h2 className="section-title">Our divisions</h2>
          <p className="body-text mb-xl">
            ~70 members across 7 specialized divisions. Every major is welcome.
          </p>
          <div className="tabs mt-xl">
            <div className="tab-list" role="tablist">
              {divisions.map((div, i) => (
                <button
                  key={div.name}
                  className={`tab-button ${i === 0 ? "active" : ""}`}
                  role="tab"
                  data-tab={i}
                >
                  {div.name}
                </button>
              ))}
            </div>
            {divisions.map((div, i) => (
              <div
                key={div.name}
                className={`tab-content ${i === 0 ? "active" : ""}`}
                data-tab-content={i}
              >
                {div.body}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors">
        <div className="container">
          <p className="eyebrow">Partners</p>
          <h2 className="section-title">Our sponsors</h2>
        </div>
        <div className="marquee-container mt-xl">
          <div className="marquee-track">
            {/* Duplicate sponsors for seamless loop */}
            {[...sponsors, ...sponsors].map((sponsor, i) => (
              <a
                key={i}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-img-box"
              >
                <img src={sponsor.logo} alt={sponsor.name} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - above the gradient */}
      <section id="faq">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Common questions</h2>
          <div className="mt-xl">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" type="button">
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earth Curve - directly above footer */}
      <div className="earth-curve" />

      {/* Tab switching script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.querySelectorAll('.tab-button').forEach(btn => {
              btn.addEventListener('click', () => {
                const tabId = btn.dataset.tab;
                document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                document.querySelector('[data-tab-content="' + tabId + '"]').classList.add('active');
              });
            });
          `,
        }}
      />
    </div>
  );
}

function EarthGlobe() {
  return (
    <svg viewBox="0 0 300 300" style={{ width: "100%", height: "auto" }}>
      <style>
        {`
          @keyframes spin-globe {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: 880; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          @keyframes dash-move {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -20; }
          }
          .longitude-line {
            animation: spin-globe 80s linear infinite;
          }
          .longitude-line-reverse {
            animation: spin-globe 80s linear infinite reverse;
          }
          .latitude-line {
            animation: spin-globe 100s linear infinite;
          }
          .latitude-line-reverse {
            animation: spin-globe 100s linear infinite reverse;
          }
          .pulse-marker {
            animation: pulse 2s ease-in-out infinite;
          }
          .animated-path {
            animation: dash-move 4s linear infinite;
          }
        `}
      </style>

      {/* Earth circle */}
      <circle
        cx="150"
        cy="150"
        r="140"
        fill="none"
        stroke="#333"
        strokeWidth="1"
      />

      {/* Latitude lines (horizontal, animated) */}
      <ellipse className="latitude-line" cx="150" cy="150" rx="140" ry="45" fill="none" stroke="#222" strokeWidth="0.5" strokeDasharray="10 5" />
      <ellipse className="latitude-line-reverse" cx="150" cy="150" rx="140" ry="90" fill="none" stroke="#222" strokeWidth="0.5" strokeDasharray="8 8" />
      <ellipse className="latitude-line" cx="150" cy="110" rx="120" ry="25" fill="none" stroke="#222" strokeWidth="0.5" strokeDasharray="6 6" />
      <ellipse className="latitude-line-reverse" cx="150" cy="190" rx="120" ry="25" fill="none" stroke="#222" strokeWidth="0.5" strokeDasharray="6 6" />

      {/* Longitude lines (vertical, animated) */}
      <ellipse
        className="longitude-line"
        cx="150" cy="150" rx="40" ry="140"
        fill="none" stroke="#333" strokeWidth="0.5"
        strokeDasharray="8 8"
      />
      <ellipse
        className="longitude-line-reverse"
        cx="150" cy="150" rx="90" ry="140"
        fill="none" stroke="#333" strokeWidth="0.5"
        strokeDasharray="8 8"
      />
      <ellipse
        className="longitude-line"
        cx="150" cy="150" rx="130" ry="140"
        fill="none" stroke="#282828" strokeWidth="0.5"
        strokeDasharray="12 6"
      />

      {/* San Jose marker with pulse */}
      <circle className="pulse-marker" cx="45" cy="135" r="6" fill="rgba(255,255,255,0.2)" />
      <circle cx="45" cy="135" r="3" fill="#fff" />
      <text x="45" y="118" fill="#666" fontSize="9" textAnchor="middle">SAN JOSE</text>

      {/* Animated arc from San Jose to Utah */}
      <path
        className="animated-path"
        d="M 45 135 Q 90 90 140 115"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />

      {/* Utah pin */}
      <g transform="translate(140, 115)">
        <circle cx="0" cy="-8" r="8" fill="#d4a520" />
        <path d="M -5 -3 L 0 8 L 5 -3" fill="#d4a520" />
        <circle cx="0" cy="-8" r="4" fill="#000" fillOpacity="0.2" />
      </g>
      <text x="140" y="85" fill="#666" fontSize="9" textAnchor="middle">UTAH</text>
    </svg>
  );
}

// Divisions
const divisions = [
  { name: "Mechanical", body: "Designs chassis, arm, suspension, and drivetrain for rough terrain. Responsible for CAD, structural analysis, and manufacturing." },
  { name: "Electrical", body: "Power distribution, wiring harnesses, PCB design, sensors, and safety systems. Ensures reliable power delivery across all rover subsystems." },
  { name: "Controls", body: "Embedded software, motion control, actuators, and feedback loops. Bridges the gap between hardware and high-level software." },
  { name: "Autonomy", body: "Perception, SLAM, computer vision, and path planning. Enables the rover to navigate autonomously through unknown terrain." },
  { name: "Mission Control", body: "Operator interfaces, communications, telemetry, and field operations. The eyes and ears during competition runs." },
  { name: "Science", body: "Experiment design, sampling strategies, and data analysis. Searches for biosignatures in competition soil samples." },
  { name: "Business", body: "Sponsorships, outreach, branding, logistics, and budgeting. Keeps the team funded and connected with industry partners." },
];

// Sponsors - logos in /public/sponsors/
const sponsors = [
  { name: "SJSU Engineering", logo: "/images/sponsors/SJSU-ENGR.png", url: "https://engineering.sjsu.edu" },
  { name: "SJSU Associated Students", logo: "/images/sponsors/SJSU-AS.png", url: "https://as.sjsu.edu" },
  { name: "Google", logo: "/images/sponsors/google.png", url: "https://google.com" },
  { name: "Bergman Prototyping", logo: "/images/sponsors/bergman_prototyping.png", url: "https://bergmanprototyping.com" },
  { name: "Hamamatsu", logo: "/images/sponsors/hamamatsu.png", url: "https://hamamatsu.com" },
  { name: "Industrial Metal Supply", logo: "/images/sponsors/industrial-metal-supply.png", url: "https://industrialmetalsupply.com" },
  { name: "Kammace", logo: "/images/sponsors/khalil.png", url: "https://kammace.com" },
  { name: "Libhal", logo: "/images/sponsors/libhal.png", url: "https://libhal.github.io" },
  { name: "xTool", logo: "/images/sponsors/xtool.png", url: "https://xtool.com" },
];

const faqs = [
  {
    q: "What is SJSU Robotics?",
    a: "A student-led, multi-disciplinary robotics team at San José State University focused on designing and building a Mars rover for the University Rover Challenge.",
  },
  {
    q: "Do I need prior robotics experience to join?",
    a: "No. We welcome students from any major and help you learn mechanical, electrical, software, and business skills on real rover projects.",
  },
  {
    q: "How many members are on the team?",
    a: "Around 70 active members across Mechanical, Electrical, Control Systems, Intelligent Systems, Mission Control, Business, and Science divisions.",
  },
  {
    q: "What competitions do you participate in?",
    a: "Our primary focus for this year is the University Rover Challenge (URC), held annually in the Utah desert.",
  },
  {
    q: "How can sponsors support the team?",
    a: "Sponsors provide funding, parts, manufacturing support, and resources for testing and travel. Contact us at sjsurobotics@gmail.com for partnership opportunities.",
  },
];
