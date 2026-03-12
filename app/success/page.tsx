export default function SuccessPage() {
  return (
    <div style={{
      background: "#0A0A0A", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif",
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", gap: "16px", textAlign: "center", padding: "40px",
    }}>
      <div style={{ fontSize: "60px" }}>🎉</div>
      <h1 style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "-1px" }}>
        Your ad is live!
      </h1>
      <p style={{ color: "#666", maxWidth: "400px" }}>
        Your payment was successful and your ad has been added to the Adloop feed. 
        Users will start seeing it immediately.
      </p>
      <a href="/" style={{
        background: "#FF3A6E", color: "#fff", textDecoration: "none",
        padding: "14px 28px", borderRadius: "10px", fontWeight: "800", marginTop: "16px",
      }}>
        View the feed →
      </a>
    </div>
  )
}