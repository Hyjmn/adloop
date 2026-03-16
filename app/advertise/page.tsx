export default function AdvertisePage() {
  return (
    <div style={{
      background: "#F4F6FF", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", gap: "16px", textAlign: "center", padding: "40px",
    }}>
      <div style={{ fontFamily: "sans-serif", fontSize: "28px", fontWeight: "800", color: "#0A0A1A" }}>
        ADLOOP<span style={{ color: "#0D47FF" }}>.</span>
      </div>
      <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#0A0A1A" }}>
        Coming Soon
      </h1>
      <p style={{ color: "#666", maxWidth: "400px", lineHeight: 1.6 }}>
        We're putting the finishing touches on our advertising platform. Check back soon!
      </p>
      <a href="/" style={{ color: "#0D47FF", fontWeight: "700", textDecoration: "none", fontSize: "15px" }}>
        ← Back to home
      </a>
    </div>
  )
}