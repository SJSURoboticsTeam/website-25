import Image from "next/image";
import Link from "next/link";

export default function Leadership() {
  return (
    <>
      {/* Executive Leadership */}        
      <>
        <h2 className="section-title">Executive Board</h2>
        <div className="team-grid mb-xl">
          {executiveBoard.map((member, i) => (
            <TeamMember key={i} member={member} />
          ))}
        </div>
      </>

      {/* Division Leads */}
      <section style={{ paddingTop: 0 }}>
        <>
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
        </>
      </section>

      {/* Past Leads Link */}
      <section style={{ paddingTop: 0 }}>
        <>
          <Link href="/past-leads" className="past-leads-link">
            View Past Leadership →
          </Link>
        </>
      </section>
    </>
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
  { name: "Ashley Marie Mercurio", role: "President, Science Lead, Business Lead", linkedin: "https://www.linkedin.com/in/ashleym-mercurio/", image: "/images/leads/ashley-marie-mercurio.png" },
  { name: "Kirthika Ashokkumar", role: "Chief Engineer", linkedin: "https://www.linkedin.com/in/kirthika-ashokkumar-4233442b6/", image: "/images/leads/kirthika-ashokkumar.png" },
  { name: "Japji Kaur Batra", role: "Treasurer", linkedin: "https://www.linkedin.com/in/japji-kaur-batra/", image: "/images/leads/japji-batra.png" },
  { name: "Lainey Nguyen", role: "Safety Officer", linkedin: "https://www.linkedin.com/in/lainey-nguyen-22a641278/", image: "/images/leads/lainey-nguyen.jpeg" }
];

// Division leads organized by division
const divisions = [
  {
    name: "Mechanical",
    leads: [
      { name: "Kate Oxley", role: "Mechanical Lead", linkedin: "https://www.linkedin.com/in/kate-oxley/", image: "/images/leads/kate-oxley.jpg" }
    ],
    coLeads: [
      { name: "Diego Oliva", role: "Mechanical", linkedin: "https://www.linkedin.com/in/diego-r-oliva/", image: "/images/leads/diego-oliva.png" }
    ],
  },
  {
    name: "Electrical",
    leads: [
      { name: "Sara Berarducci", role: "Electrical Lead", linkedin: "https://www.linkedin.com/in/sara-berarducci/", image: "/images/leads/sara-berarducci.png" }
    ],
  },
  {
    name: "Firmware",
    leads: [
      { name: "Michael Kersey", role: "Firmware Lead", linkedin: "https://www.linkedin.com/in/michael-kersey-ba89272a5/", image: "/images/leads/michael-kersey.png" }
    ],
  },
  {
    name: "Mission Control",
    leads: [
      { name: "Braden Wagner", role: "Mission Control Lead", linkedin: "https://www.linkedin.com/in/wagnerbraden/", image: "/images/leads/braden-wagner.jpg" }
    ],
  },
  {
    name: "Intelligent Systems",
    leads: [
      { name: "Ahmad Kaddoura", role: "Intelligent Systems Lead", linkedin: "https://www.linkedin.com/in/ahmadkaddoura/", image: "/images/leads/ahmad-kaddoura.png" }
    ],
    coLeads: [
      { name: "Aahil Shaikh", role: "Intelligent Systems", linkedin: "https://www.linkedin.com/in/aahilshaikh/", image: "/images/leads/aahil-shaikh.jpg" },
      { name: "Hemang Mahra", role: "Intelligent Systems", linkedin: "https://www.linkedin.com/in/hemang-mehra-408b70322/", image: "/images/leads/hemang-mehra.jpeg" }
    ],
  },
];
