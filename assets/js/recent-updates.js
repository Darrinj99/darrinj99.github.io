/*
  HOMEPAGE RECENT UPDATES
  -----------------------
  Put the newest update FIRST.
  The homepage automatically shows only the first 3 entries.
  See /RECENT-UPDATES-README.md for a copy/paste template and instructions.
*/
window.PORTFOLIO_UPDATES = [
  {
    date: "August 2026",
    type: "Certification",
    title: "HTB Certified Penetration Testing Specialist (CPTS)",
    summary: "I passed HTB CPTS after spending the last several months focused heavily on hands-on penetration testing. My next focus is improving my methodology, enumeration, reporting, and Active Directory skills.",
    href: "/about/",
    tone: "yellow"
  },
  {
    date: "November 2025",
    type: "Vulnerability research",
    title: "CVE-2025-63560 assigned to my Kiloview E3 finding",
    summary: "The unauthenticated factory-reset issue I found in the Kiloview E3 was assigned CVE-2025-63560 after disclosure and vendor remediation.",
    href: "/writeups/kiloview_e3.html",
    tone: "red",
    image: "https://darrinj99.github.io/images/e3postexploit.png"
  },
  {
    date: "Lab project",
    type: "Homelab",
    title: "Pi-hole DNS sinkhole and DNS visibility",
    summary: "I added my Pi-hole build to the site. I use it for network-wide DNS filtering, visibility into client requests, and encrypted upstream DNS.",
    href: "/lab/dns-sinkhole.html",
    tone: "purple",
    image: "https://darrinj99.github.io/images/dashboard.png"
  }
];
