import Link from "next/link";

export default function PastLeads() {
  return (
    <div className="page" style={{ paddingTop: "80px" }}>
      <section style={{ paddingBottom: "var(--space-md)" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "var(--space-xs)" }}>History</p>
          <h1 className="page-title">Past Leadership</h1>
          <p className="body-text-large">
            Honoring the leaders who built SJSU Robotics.
          </p>
          <Link href="/board" className="past-leads-link mt-lg" style={{ display: "inline-block" }}>
            ← Current Leadership
          </Link>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          {pastLeads.map((year, i) => (
            <div key={i} className="past-year-section">
              <h2 className="past-year-title">{year.year}</h2>
              <div className="past-leads-grid">
                {year.leads.map((lead, j) => (
                  <div key={j} className="past-lead-item">
                    <p className="past-lead-name">{lead.name}</p>
                    <p className="past-lead-role">{lead.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const pastLeads = [
  {
    year: "2023 - 2024",
    leads: [
      { name: "Maya Enriquez", role: "President" },
      { name: "Matthew Ard", role: "Treasurer" },
      { name: "Erin Gribi", role: "Business Lead" },
      { name: "Samuel Grayson Spangenberg", role: "Science Lead" },
      { name: "Brett Higginbotham", role: "Mechanical Lead" },
      { name: "Shin Umeda", role: "Electrical Lead" },
      { name: "Viha Shah", role: "Control Systems Lead" },
      { name: "Evan Astle", role: "Mission Control Lead" },
      { name: "Maaz Adil", role: "Intelligent Systems Lead" },
    ],
  },
  {
    year: "2022 - 2023",
    leads: [
      { name: "Santosh Dasari", role: "President" },
      { name: "Matthew Ard", role: "Treasurer" },
      { name: "Shveta Ram", role: "Business Lead" },
      { name: "Ashley Marie Mercurio", role: "Science Lead" },
      { name: "Marco Koch", role: "Mechanical Lead" },
      { name: "Brandon Claveria", role: "Electrical Lead" },
      { name: "Corey Kelley", role: "Control Systems Lead" },
      { name: "Nathanael Garza", role: "Mission Control Lead" },
      { name: "Adrien Carrou", role: "Intelligent Systems Lead" },
    ],
  },
  {
    year: "2021 - 2022",
    leads: [
      { name: "Mason Sage", role: "President" },
      { name: "Vishnu Adda", role: "Treasurer" },
      { name: "Santosh Dasari", role: "Mechanical Lead" },
      { name: "Maxim Vovenko", role: "Electrical Lead" },
      { name: "Nathanael Garza", role: "Control Systems Lead" },
      { name: "Vishnu Adda", role: "Mission Control Lead" },
      { name: "Mason Sage", role: "Intelligent Systems Lead" },
    ],
  },
  {
    year: "2020 - 2021",
    leads: [
      { name: "David Dias", role: "President" },
      { name: "Vishnu Adda", role: "Treasurer" },
      { name: "Gabrielle Dominguez", role: "Business Lead" },
      { name: "Richard Ngo", role: "Science Lead" },
      { name: "David Dias", role: "Mechanical Lead" },
      { name: "Quan Le", role: "Electrical Lead" },
      { name: "Nathanael Garza", role: "Control Systems Lead" },
      { name: "Vishnu Adda", role: "Mission Control Lead" },
      { name: "Pushpal Patil", role: "Intelligent Systems Lead" },
    ],
  },
  {
    year: "2019 - 2020",
    leads: [
      { name: "Colin Schardt", role: "President" },
      { name: "Smruthi Danda", role: "Treasurer" },
      { name: "Richard Ngo", role: "Science Lead" },
      { name: "David Dias", role: "Mechanical Lead" },
      { name: "Smruthi Danda", role: "Electrical Lead" },
      { name: "Evan Ugarte", role: "Control Systems Lead" },
      { name: "Vishnu Adda", role: "Mission Control Lead" },
      { name: "Yosef Mirsky", role: "Intelligent Systems Lead" },
    ],
  },
  {
    year: "2018 - 2019",
    leads: [
      { name: "Ari Koumis", role: "President" },
      { name: "Keven Gallegos", role: "Treasurer & Business Lead" },
      { name: "Lillith Gillespie", role: "Science Lead" },
      { name: "Jonathon Nguyen", role: "Mechanical Lead" },
      { name: "Nathaniel Ciceron", role: "Electrical Lead" },
      { name: "Colin Schardt", role: "Control Systems Lead" },
      { name: "Evan Ugarte", role: "Mission Control Lead" },
      { name: "Nelson", role: "Intelligent Systems Lead" },
    ],
  },
];
