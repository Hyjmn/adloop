"use client";

export default function LandingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;600;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #F4F6FF; }
      `}</style>

      <div style={{ background: "#F4F6FF", color: "#0A0A1A", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>

        {/* Nav */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 32px", background: "#fff", borderBottom: "1px solid #E0E4F0", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", letterSpacing: "2px", color: "#0A0A1A" }}>
            ADLOOP<span style={{ color: "#0D47FF" }}>.</span>
          </div>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <a href="#how-it-works" style={{ color: "#666", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>How it works</a>
            <a href="#pricing" style={{ color: "#666", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>Pricing</a>
            <a href="/about" style={{ color: "#666", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>About</a>
            <a href="/feed" style={{ color: "#666", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>View Feed</a>
            <a href="/advertise" style={{ background: "#0D47FF", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "8px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
              Start Advertising →
            </a>
          </div>
        </nav>

        {/* Hero */}
        <div style={{ padding: "80px 32px 60px", textAlign: "center", background: "#fff" }}>
          <div style={{ display: "inline-block", background: "#EEF1FF", border: "1px solid #C7D0FF", color: "#0D47FF", fontSize: "12px", fontWeight: "700", padding: "6px 14px", borderRadius: "20px", marginBottom: "24px", letterSpacing: "1px", textTransform: "uppercase" }}>
            ⚡ The future of digital advertising
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "72px", lineHeight: 1, letterSpacing: "3px", marginBottom: "24px", color: "#0A0A1A" }}>
            YOUR BRAND.<br />
            <span style={{ color: "#0D47FF" }}>INFINITE</span> REACH.
          </h1>
          <p style={{ color: "#666", fontSize: "18px", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.6 }}>
            Put your ad in front of thousands of engaged users. Pay only for the impressions you get. No waste, no guesswork.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/advertise" style={{ background: "#0D47FF", color: "#fff", border: "none", padding: "16px 32px", borderRadius: "10px", fontSize: "16px", fontWeight: "800", textDecoration: "none" }}>
              Start Advertising →
            </a>
            <a href="/feed" style={{ background: "transparent", color: "#0A0A1A", border: "1px solid #DDD", padding: "16px 32px", borderRadius: "10px", fontSize: "16px", fontWeight: "800", textDecoration: "none" }}>
              View the Feed
            </a>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: "48px", padding: "40px 32px", background: "#EEF1FF", borderTop: "1px solid #D0D8FF", borderBottom: "1px solid #D0D8FF", flexWrap: "wrap" }}>
          {[
            { num: "500K+", label: "Monthly impressions" },
            { num: "$5", label: "Per 1,000 impressions" },
            { num: "24H", label: "Go live in 24 hours" },
            { num: "100%", label: "Brand safe" },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "40px", color: "#0D47FF", letterSpacing: "2px" }}>{stat.num}</div>
              <div style={{ color: "#666", fontSize: "13px", fontWeight: "600", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div id="how-it-works" style={{ padding: "64px 32px", background: "#fff", textAlign: "center" }}>
          <div style={{ color: "#0D47FF", fontSize: "12px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px" }}>How it works</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "48px", letterSpacing: "2px", marginBottom: "48px", color: "#0A0A1A" }}>THREE SIMPLE STEPS</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", maxWidth: "800px", margin: "0 auto" }}>
            {[
              { step: "01", title: "Create your ad", desc: "Fill in your brand details, upload an image and write your headline." },
              { step: "02", title: "Choose impressions", desc: "Pick how many impressions you want to buy. Starting from just $50." },
              { step: "03", title: "Go live instantly", desc: "Pay and your ad appears in the feed immediately. No waiting." },
            ].map(item => (
              <div key={item.step} style={{ background: "#F4F6FF", border: "1px solid #E0E4F0", borderRadius: "16px", padding: "32px 24px" }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "48px", color: "#0D47FF", letterSpacing: "2px", marginBottom: "12px" }}>{item.step}</div>
                <div style={{ fontWeight: "800", fontSize: "16px", marginBottom: "8px", color: "#0A0A1A" }}>{item.title}</div>
                <div style={{ color: "#777", fontSize: "14px", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", padding: "48px 32px", background: "#F4F6FF" }}>
          {[
            { icon: "⚡", title: "Instant activation", desc: "Pay and your ad goes live immediately. No waiting for approval." },
            { icon: "🎯", title: "Pay per impression", desc: "Only pay for real eyeballs. $5 CPM, no hidden fees ever." },
            { icon: "📈", title: "Real-time analytics", desc: "Track your impressions and performance as they happen." },
          ].map(feature => (
            <div key={feature.title} style={{ background: "#fff", border: "1px solid #E0E4F0", borderRadius: "12px", padding: "24px" }}>
              <div style={{ width: "40px", height: "40px", background: "#EEF1FF", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", fontSize: "20px" }}>
                {feature.icon}
              </div>
              <div style={{ fontSize: "16px", fontWeight: "800", marginBottom: "8px", color: "#0A0A1A" }}>{feature.title}</div>
              <div style={{ color: "#777", fontSize: "13px", lineHeight: 1.5 }}>{feature.desc}</div>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div id="pricing" style={{ padding: "64px 32px", background: "#fff", textAlign: "center" }}>
          <div style={{ color: "#0D47FF", fontSize: "12px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px" }}>Pricing</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "48px", letterSpacing: "2px", marginBottom: "48px", color: "#0A0A1A" }}>SIMPLE, TRANSPARENT PRICING</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", maxWidth: "800px", margin: "0 auto" }}>
            {[
              { label: "Starter", impressions: "10,000", price: "$50", desc: "Great for testing", popular: false },
              { label: "Growth", impressions: "50,000", price: "$250", desc: "Most popular", popular: true },
              { label: "Pro", impressions: "100,000", price: "$500", desc: "Maximum reach", popular: false },
            ].map(pkg => (
              <div key={pkg.label} style={{ background: pkg.popular ? "#0D47FF" : "#F4F6FF", border: pkg.popular ? "2px solid #0D47FF" : "1px solid #E0E4F0", borderRadius: "16px", padding: "32px 24px" }}>
                {pkg.popular && <div style={{ background: "#fff", color: "#0D47FF", fontSize: "11px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", display: "inline-block", marginBottom: "16px", letterSpacing: "0.5px" }}>MOST POPULAR</div>}
                <div style={{ fontWeight: "800", fontSize: "18px", marginBottom: "8px", color: pkg.popular ? "#fff" : "#0A0A1A" }}>{pkg.label}</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "48px", color: pkg.popular ? "#fff" : "#0D47FF", letterSpacing: "2px" }}>{pkg.price}</div>
                <div style={{ color: pkg.popular ? "#ffffff99" : "#888", fontSize: "13px", marginBottom: "24px" }}>{pkg.impressions} impressions</div>
                <a href="/advertise" style={{ display: "block", background: pkg.popular ? "#fff" : "#0D47FF", color: pkg.popular ? "#0D47FF" : "#fff", padding: "12px", borderRadius: "8px", fontWeight: "800", fontSize: "14px", textDecoration: "none" }}>
                  Get started →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "#0D47FF", margin: "0 32px 48px", borderRadius: "16px", padding: "48px 32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "48px", letterSpacing: "2px", marginBottom: "12px", color: "#fff" }}>READY TO GET SEEN?</h2>
          <p style={{ color: "#ffffff99", marginBottom: "28px", fontSize: "15px" }}>Join hundreds of brands already advertising on Adloop.</p>
          <a href="/advertise" style={{ background: "#fff", color: "#0D47FF", border: "none", padding: "16px 32px", borderRadius: "10px", fontSize: "16px", fontWeight: "800", textDecoration: "none" }}>
            Start for $50 →
          </a>
        </div>

        {/* Footer */}
        <div style={{ padding: "32px", borderTop: "1px solid #E0E4F0", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "22px", letterSpacing: "2px" }}>
            ADLOOP<span style={{ color: "#0D47FF" }}>.</span>
          </div>
          <div style={{ color: "#999", fontSize: "13px" }}>© 2026 Adloop. All rights reserved.</div>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="/about" style={{ color: "#888", fontSize: "13px", textDecoration: "none" }}>About</a>
            <a href="/advertise" style={{ color: "#888", fontSize: "13px", textDecoration: "none" }}>Advertise</a>
            <a href="/feed" style={{ color: "#888", fontSize: "13px", textDecoration: "none" }}>Feed</a>
          </div>
        </div>

      </div>
    </>
  );
}