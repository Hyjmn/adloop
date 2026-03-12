"use client";
import { useState } from "react";

export default function AboutPage() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;600;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={{ background: "#F4F6FF", color: "#0A0A1A", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>

        {/* Nav */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 32px", background: "#fff", borderBottom: "1px solid #E0E4F0", position: "sticky", top: 0, zIndex: 100 }}>
          <a href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", letterSpacing: "2px", color: "#0A0A1A", textDecoration: "none" }}>
            ADLOOP<span style={{ color: "#0D47FF" }}>.</span>
          </a>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <a href="/#how-it-works" style={{ color: "#666", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>How it works</a>
            <a href="/#pricing" style={{ color: "#666", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>Pricing</a>
            <a href="/about" style={{ color: "#0D47FF", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>About</a>
            <a href="/feed" style={{ color: "#666", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>View Feed</a>
            <a href="/advertise" style={{ background: "#0D47FF", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "8px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
              Start Advertising →
            </a>
          </div>
        </nav>

        {/* Hero */}
        <div style={{ padding: "80px 32px 60px", textAlign: "center", background: "#fff", borderBottom: "1px solid #E0E4F0" }}>
          <div style={{ display: "inline-block", background: "#EEF1FF", border: "1px solid #C7D0FF", color: "#0D47FF", fontSize: "12px", fontWeight: "700", padding: "6px 14px", borderRadius: "20px", marginBottom: "24px", letterSpacing: "1px", textTransform: "uppercase" }}>
            Our story
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "64px", lineHeight: 1, letterSpacing: "3px", marginBottom: "24px", color: "#0A0A1A" }}>
            ADVERTISING THAT<br /><span style={{ color: "#0D47FF" }}>ACTUALLY WORKS</span>
          </h1>
          <p style={{ color: "#666", fontSize: "18px", maxWidth: "560px", margin: "0 auto", lineHeight: 1.6 }}>
            Adloop was built to fix digital advertising. No bots, no wasted impressions, no confusing dashboards. Just real people seeing your brand.
          </p>
        </div>

        {/* Mission */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", padding: "48px 32px", maxWidth: "1000px", margin: "0 auto" }}>
          {[
            { icon: "⚡", title: "Our mission", desc: "We believe every brand deserves access to powerful, affordable advertising. We built Adloop to make that a reality — no minimum spend, no complex setup, no wasted budget." },
            { icon: "🎯", title: "How we're different", desc: "Unlike traditional ad platforms, Adloop puts your brand directly in front of engaged users in a clean, Instagram-style feed. No distractions, no banner blindness — just your ad." },
            { icon: "💡", title: "What we believe", desc: "Advertising should be simple, transparent and fair. You should only pay for real impressions, see exactly where your money goes, and be able to get started in minutes." },
          ].map(item => (
            <div key={item.title} style={{ background: "#fff", border: "1px solid #E0E4F0", borderRadius: "16px", padding: "32px 24px" }}>
              <div style={{ width: "44px", height: "44px", background: "#EEF1FF", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "16px" }}>
                {item.icon}
              </div>
              <div style={{ fontWeight: "800", fontSize: "18px", marginBottom: "10px", color: "#0A0A1A" }}>{item.title}</div>
              <div style={{ color: "#777", fontSize: "14px", lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: "48px", padding: "40px 32px", background: "#EEF1FF", borderTop: "1px solid #D0D8FF", borderBottom: "1px solid #D0D8FF", flexWrap: "wrap" }}>
          {[
            { num: "500K+", label: "Monthly impressions" },
            { num: "$5", label: "CPM rate" },
            { num: "100+", label: "Brands advertising" },
            { num: "24/7", label: "Always on" },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "40px", color: "#0D47FF", letterSpacing: "2px" }}>{stat.num}</div>
              <div style={{ color: "#666", fontSize: "13px", fontWeight: "600", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div style={{ padding: "64px 32px", background: "#fff" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <div style={{ color: "#0D47FF", fontSize: "12px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px" }}>Get in touch</div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "48px", letterSpacing: "2px", marginBottom: "12px", color: "#0A0A1A" }}>CONTACT US</h2>
            <p style={{ color: "#666", fontSize: "15px", marginBottom: "40px", lineHeight: 1.6 }}>
              Have a question about advertising on Adloop? We'd love to hear from you.
            </p>

            {submitted ? (
              <div style={{ background: "#EEF1FF", border: "1px solid #C7D0FF", borderRadius: "16px", padding: "48px 32px", textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
                <div style={{ fontWeight: "800", fontSize: "20px", marginBottom: "8px", color: "#0A0A1A" }}>Message sent!</div>
                <div style={{ color: "#666", fontSize: "15px" }}>We'll get back to you within 24 hours.</div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#666", marginBottom: "6px" }}>Your email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="brand@company.com"
                    style={{ width: "100%", background: "#F4F6FF", border: "1px solid #E0E4F0", borderRadius: "8px", padding: "12px 14px", color: "#0A0A1A", fontSize: "15px", outline: "none" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#666", marginBottom: "6px" }}>Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your brand and what you're looking for..."
                    rows={6}
                    style={{ width: "100%", background: "#F4F6FF", border: "1px solid #E0E4F0", borderRadius: "8px", padding: "12px 14px", color: "#0A0A1A", fontSize: "15px", outline: "none", resize: "vertical", fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!form.email || !form.message}
                  style={{ background: form.email && form.message ? "#0D47FF" : "#C0C8E0", color: "#fff", border: "none", borderRadius: "10px", padding: "16px", fontSize: "16px", fontWeight: "800", cursor: form.email && form.message ? "pointer" : "not-allowed" }}
                >
                  Send message →
                </button>
              </div>
            )}
          </div>
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