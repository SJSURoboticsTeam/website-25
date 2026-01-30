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
  const hasLinkedIn = member.linkedin && member.linkedin !== "#";

  const content = (
    <>
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
    </>
  );

  return (
    <div className="team-member">
      {hasLinkedIn ? (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <div>{content}</div>
      )}
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
  { name: "Kirthika Ashokkumar", role: "President", linkedin: "https://www.linkedin.com/in/kirthika-ashokkumar-4233442b6/", image: "/images/leads/kirthika-ashokkumar.png" },
  { name: "Ashley Marie Mercurio", role: "Vice President, Safety Officer, Science Lead, Business Lead", linkedin: "https://www.linkedin.com/in/ashleym-mercurio/", image: "/images/leads/ashley-marie-mercurio.png" },
  { name: "Ashley Hernandez Mora", role: "Treasurer", linkedin: "https://www.linkedin.com/in/ashleyhernandezmora/", image: "/images/leads/ashley-hernandez-mora.png" },
  { name: "Mukund Kunapareddy", role: "Co-Business Lead", linkedin: "#", image: "/images/leads/mukund-kunapareddy.png" },
];

// Division leads organized by division
const divisions = [
  {
    name: "Mechanical",
    leads: [
      { name: "Kate Oxley", role: "Mechanical Lead", linkedin: "https://www.linkedin.com/in/kate-oxley/", image: "/images/leads/kate-oxley.jpg" },
    ],
    coLeads: [
      { name: "Diego Oliva", role: "Mechanical", linkedin: "#", image: "/images/leads/diego-oliva.png" },
    ],
  },
  {
    name: "Electrical",
    leads: [
      { name: "Shin Umeda", role: "Electrical Lead", linkedin: "https://www.linkedin.com/in/shin-umeda-39481024b/", image: "/images/leads/shin-umeda.png" },
    ],
    coLeads: [
      { name: "Sara Berarducci", role: "Electrical", linkedin: "#", image: "/images/leads/default.png" },
    ],
  },
  {
    name: "Firmware",
    leads: [
      { name: "Michael Kersey", role: "Firmware Lead", linkedin: "https://www.linkedin.com/in/michael-kersey-ba89272a5/", image: "/images/leads/michael-kersey.png" },
    ],
    coLeads: [] as Member[],
  },
  {
    name: "Mission Control",
    leads: [
      { name: "Nina Wang", role: "Mission Control Lead", linkedin: "https://www.linkedin.com/in/ninawang04/", image: "/images/leads/nina-wang.png" },
    ],
    coLeads: [] as Member[],
  },
  {
    name: "Intelligent Systems",
    leads: [
      { name: "Ahmad Kaddoura", role: "Intelligent Systems Lead", linkedin: "#", image: "/images/leads/ahmad-kaddoura.png" },
    ],
    coLeads: [] as Member[],
  },
];
