import { useState, useEffect } from "react";
import type { OrgData, SiteStats } from "./types";
import { Landing } from "./pages/Landing";
import { OrgDetail } from "./pages/OrgDetail";
import { Methodology } from "./pages/Methodology";

type Route =
  | { page: "landing" }
  | { page: "detail"; orgId: string }
  | { page: "methodology" };

function parseHash(): Route {
  const hash = window.location.hash.slice(1) || "/";
  if (hash.startsWith("/explorer/")) {
    return { page: "detail", orgId: hash.slice("/explorer/".length) };
  }
  if (hash === "/explorer") return { page: "landing" };
  if (hash === "/methodology") return { page: "methodology" };
  return { page: "landing" };
}

export function App() {
  const [route, setRoute] = useState<Route>(parseHash);
  const [orgs, setOrgs] = useState<OrgData[]>([]);
  const [stats, setStats] = useState<SiteStats | null>(null);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    fetch("data/orgs.json").then((r) => r.json()).then(setOrgs);
    fetch("data/stats.json").then((r) => r.json()).then(setStats);
  }, []);

  if (!orgs.length || !stats) {
    return <div style={{ padding: 40, textAlign: "center" }}>Loading data…</div>;
  }

  const nav = (
    <nav style={styles.nav}>
      <a href="#/" style={styles.navBrand}>ROI Form Study</a>
      <div style={styles.navLinks}>
        <a href="#/" style={styles.navLink}>Home</a>
        <a href="#/methodology" style={styles.navLink}>Methodology</a>
      </div>
    </nav>
  );

  let content;
  switch (route.page) {
    case "landing":
      content = <Landing stats={stats} orgs={orgs} />;
      break;
    case "detail":
      content = <OrgDetail orgs={orgs} orgId={route.orgId} />;
      break;
    case "methodology":
      content = <Methodology orgs={orgs} />;
      break;
  }

  return (
    <>
      {nav}
      <main style={styles.main}>{content}</main>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
    background: "#1a1a2e",
    color: "#fff",
  },
  navBrand: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 18,
    textDecoration: "none",
  },
  navLinks: { display: "flex", gap: 16 },
  navLink: { color: "#94a3b8", fontSize: 14, textDecoration: "none" },
  main: { maxWidth: 1200, margin: "0 auto", padding: "24px 16px" },
};
