import Image from "next/image";

export default function Board() {
  return (
    <div className="page" style={{ paddingTop: "64px" }}>
      <section style={{ paddingBottom: "var(--space-md)" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "var(--space-xs)" }}>Leadership</p>
          <p className="body-text-large">
            Meet the student leaders who guide SJSU Robotics.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="team-grid">
            {boardMembers.map((member, i) => (
              <div key={i} className="team-member">
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
                  <p className="team-role">{member.role}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Board members for 2024-2025
const boardMembers = [
  { name: "Kirthika Ashokkumar", role: "President", linkedin: "https://www.linkedin.com/in/kirthika-ashokkumar-4233442b6/", image: "/images/leads/kirthika-ashokkumar.jpg" },
  { name: "Ashley Hernandez", role: "Treasurer", linkedin: "https://www.linkedin.com/in/ashleyhernandezmora/", image: "/images/leads/ashley-hernandez.jpeg" },
  { name: "Ashley Mercurio", role: "Science Lead, Safety Officer", linkedin: "https://www.linkedin.com/in/ashleym-mercurio/", image: "/images/leads/ashley-mercurio.jpeg" },
  { name: "Kate Oxley", role: "Mechanical Lead", linkedin: "https://www.linkedin.com/in/kate-oxley/", image: "/images/leads/kate-oxley.jpeg" },
  { name: "Shin Umeda", role: "Electrical Lead", linkedin: "https://www.linkedin.com/in/shin-umeda-39481024b/", image: "/images/leads/shin-umeda.jpeg" },
  { name: "Michael Kersey", role: "Control Systems Lead", linkedin: "https://www.linkedin.com/in/michael-kersey-ba89272a5/", image: "/images/leads/michael-kersey.jpeg" },
  { name: "Nina Wang", role: "Mission Control Lead", linkedin: "https://www.linkedin.com/in/ninawang04/", image: "/images/leads/nina-wang.jpeg" },
  { name: "Ahmad Kaddoura", role: "Intelligent Systems Lead", linkedin: "#", image: "/images/leads/ahmad-kaddoura.jpeg" },
];
