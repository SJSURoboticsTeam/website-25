import Image from "next/image";
import Link from "next/link";

export default function Leadership() {
  return (
    <div className="page" style={{ paddingTop: "80px" }}>
      <section style={{ paddingBottom: "var(--space-md)" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "var(--space-xs)" }}>Our Team</p>
          <h1 className="page-title">Leadership</h1>
          <p className="body-text-large">
            Meet the student leaders who guide SJSU Robotics.
          </p>
        </div>
      </section>

      {/* Executive Leadership */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title">Executive Board</h2>
          <div className="team-grid mb-xl">
            {executiveBoard.map((member, i) => (
              <TeamMember key={i} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Division Leads */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title">Division Leads</h2>
          <div className="divisions-leadership">
            {divisions.map((division, i) => (
              <div key={i} className="division-section">
                <h3 className="division-title">{division.name}</h3>
                <div className="division-leads-grid">
                  {division.leads.map((member, j) => (
                    <TeamMember key={j} member={member} />
                  ))}
                  {division.coLeads && division.coLeads.map((member, j) => (
                    <TeamMember key={`co-${j}`} member={member} isCoLead />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Leads Link */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Link href="/past-leads" className="past-leads-link">
            View Past Leadership →
          </Link>
        </div>
      </section>
    </div>
  );
}

function TeamMember({ member, isCoLead = false }: { member: Member; isCoLead?: boolean }) {
  return (
    <div className="team-member">
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="team-photo">
          <Image
            src={member.image}
            alt={member.name}
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="team-name">{member.name}</p>
        <p className="team-role">{isCoLead ? `Co-Lead: ${member.role}` : member.role}</p>
      </a>
    </div>
  );
}

interface Member {
  name: string;
  role: string;
  linkedin: string;
  image: string;
}

// Executive Board
const executiveBoard: Member[] = [
  { name: "Kirthika Ashokkumar", role: "President", linkedin: "https://www.linkedin.com/in/kirthika-ashokkumar-4233442b6/", image: "/images/leads/kirthika-ashokkumar.jpg" },
  { name: "Ashley Hernandez", role: "Treasurer", linkedin: "https://www.linkedin.com/in/ashleyhernandezmora/", image: "/images/leads/ashley-hernandez.jpeg" },
];

// Division leads organized by division
const divisions = [
  {
    name: "Science",
    leads: [
      { name: "Ashley Mercurio", role: "Science Lead, Safety Officer", linkedin: "https://www.linkedin.com/in/ashleym-mercurio/", image: "/images/leads/ashley-mercurio.jpeg" },
    ],
    coLeads: [] as Member[],
  },
  {
    name: "Mechanical",
    leads: [
      { name: "Kate Oxley", role: "Mechanical Lead", linkedin: "https://www.linkedin.com/in/kate-oxley/", image: "/images/leads/kate-oxley.jpeg" },
    ],
    coLeads: [] as Member[],
  },
  {
    name: "Electrical",
    leads: [
      { name: "Shin Umeda", role: "Electrical Lead", linkedin: "https://www.linkedin.com/in/shin-umeda-39481024b/", image: "/images/leads/shin-umeda.jpeg" },
    ],
    coLeads: [] as Member[],
  },
  {
    name: "Control Systems",
    leads: [
      { name: "Michael Kersey", role: "Control Systems Lead", linkedin: "https://www.linkedin.com/in/michael-kersey-ba89272a5/", image: "/images/leads/michael-kersey.jpeg" },
    ],
    coLeads: [] as Member[],
  },
  {
    name: "Mission Control",
    leads: [
      { name: "Nina Wang", role: "Mission Control Lead", linkedin: "https://www.linkedin.com/in/ninawang04/", image: "/images/leads/nina-wang.jpeg" },
    ],
    coLeads: [] as Member[],
  },
  {
    name: "Intelligent Systems",
    leads: [
      { name: "Ahmad Kaddoura", role: "Intelligent Systems Lead", linkedin: "#", image: "/images/leads/ahmad-kaddoura.jpeg" },
    ],
    coLeads: [] as Member[],
  },
];
