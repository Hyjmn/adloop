"use client";
import { useState } from "react";

const CPM_PACKAGES = [
  { label: "Starter", impressions: 10000, price: 50, description: "Great for testing" },
  { label: "Growth", impressions: 50000, price: 250, description: "Most popular" },
  { label: "Pro", impressions: 100000, price: 500, description: "Maximum reach" },
];

export default function AdvertisePage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(CPM_PACKAGES[1]);
  const [form, setForm] = useState({
    brand: "",
    handle: "",
    headline: "",
    cta_text: "",
    category: "",
    image_url: "",
    accent_color: "#FFD700",
    bg_color: "#000000",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ...selectedPackage }),
      });
      const { url } = await res.json();
      window.location.href = url;
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div style={{
      background: "#0A0A0A", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif",
      color: "#fff", padding: "40px 20px",
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800&display=swap');`}</style>

      {/* Header */}
      <div style={{ maxWidth: 540, margin: "0 auto 40px" }}>
        <a href="/" style={{ color: "#666", fontSize: "14px", textDecoration: "none" }}>← Back to feed</a>
        <h1 style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "-1px", marginTop: "16px" }}>
          advertise on adloop<span style={{ color: "#FF3A6E" }}>.</span>
        </h1>
        <p style={{ color: "#666", marginTop: "8px" }}>Reach thousands of engaged users. Pay per 1,000 impressions.</p>
      </div>

      <div style={{ maxWidth: 540, margin: "0 auto" }}>

        {/* Step 1 — Ad Details */}
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "24px", color: "#aaa" }}>
              Step 1 of 2 — Your Ad Details
            </h2>

            {[
              { label: "Brand Name", name: "brand", placeholder: "e.g. Nike" },
              { label: "Handle", name: "handle", placeholder: "e.g. @nike" },
              { label: "Headline", name: "headline", placeholder: "e.g. Just Do It. Summer Collection" },
              { label: "CTA Button Text", name: "cta_text", placeholder: "e.g. Shop Now" },
              { label: "Image URL", name: "image_url", placeholder: "https://..." },
            ].map(field => (
              <div key={field.name} style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#aaa", marginBottom: "6px" }}>
                  {field.label}
                </label>
                <input
                  name={field.name}
                  value={(form as any)[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  style={{
                    width: "100%", background: "#1a1a1a", border: "1px solid #333",
                    borderRadius: "8px", padding: "12px 14px", color: "#fff",
                    fontSize: "15px", outline: "none",
                  }}
                />
              </div>
            ))}

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#aaa", marginBottom: "6px" }}>
                Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                style={{
                  width: "100%", background: "#1a1a1a", border: "1px solid #333",
                  borderRadius: "8px", padding: "12px 14px", color: "#fff",
                  fontSize: "15px", outline: "none",
                }}
              >
                <option value="">Select a category</option>
                {["Fashion", "Tech", "Auto", "Travel", "Food", "Music", "Luxury", "Fitness", "Other"].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div style={{ display: "flex", gap: "16px", marginBottom: "32px" }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#aaa", marginBottom: "6px" }}>
                  Background Color
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#1a1a1a", border: "1px solid #333", borderRadius: "8px", padding: "8px 14px" }}>
                  <input type="color" name="bg_color" value={form.bg_color} onChange={handleChange} style={{ width: 32, height: 32, border: "none", background: "none", cursor: "pointer" }} />
                  <span style={{ color: "#aaa", fontSize: "14px" }}>{form.bg_color}</span>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#aaa", marginBottom: "6px" }}>
                  Accent Color
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#1a1a1a", border: "1px solid #333", borderRadius: "8px", padding: "8px 14px" }}>
                  <input type="color" name="accent_color" value={form.accent_color} onChange={handleChange} style={{ width: 32, height: 32, border: "none", background: "none", cursor: "pointer" }} />
                  <span style={{ color: "#aaa", fontSize: "14px" }}>{form.accent_color}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!form.brand || !form.headline || !form.image_url}
              style={{
                width: "100%", background: form.brand && form.headline && form.image_url ? "#FF3A6E" : "#333",
                color: "#fff", border: "none", borderRadius: "10px",
                padding: "16px", fontSize: "16px", fontWeight: "800",
                cursor: form.brand && form.headline && form.image_url ? "pointer" : "not-allowed",
                letterSpacing: "-0.3px",
              }}
            >
              Next: Choose Package →
            </button>
          </div>
        )}

        {/* Step 2 — Choose Package */}
        {step === 2 && (
          <div>
            <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "24px", color: "#aaa" }}>
              Step 2 of 2 — Choose Your Package
            </h2>

            {CPM_PACKAGES.map(pkg => (
              <div
                key={pkg.label}
                onClick={() => setSelectedPackage(pkg)}
                style={{
                  background: selectedPackage.label === pkg.label ? "#1a1a1a" : "#111",
                  border: `2px solid ${selectedPackage.label === pkg.label ? "#FF3A6E" : "#222"}`,
                  borderRadius: "12px", padding: "20px", marginBottom: "12px",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: "800", fontSize: "18px" }}>{pkg.label}</div>
                    <div style={{ color: "#666", fontSize: "13px", marginTop: "4px" }}>{pkg.description}</div>
                    <div style={{ color: "#aaa", fontSize: "14px", marginTop: "8px" }}>
                      {pkg.impressions.toLocaleString()} impressions
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "28px", fontWeight: "800", color: "#FF3A6E" }}>${pkg.price}</div>
                    <div style={{ color: "#555", fontSize: "12px" }}>$5 CPM</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Preview */}
            <div style={{ background: "#111", border: "1px solid #222", borderRadius: "12px", padding: "20px", margin: "24px 0" }}>
              <div style={{ color: "#666", fontSize: "12px", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>Ad Preview</div>
              <div style={{ fontWeight: "700", fontSize: "16px" }}>{form.brand}</div>
              <div style={{ color: "#aaa", fontSize: "14px", marginTop: "4px" }}>{form.headline}</div>
              <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: form.bg_color }} />
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: form.accent_color }} />
                <span style={{ color: "#555", fontSize: "12px", alignSelf: "center" }}>Brand colors</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() => setStep(1)}
                style={{
                  flex: 1, background: "#1a1a1a", color: "#aaa", border: "1px solid #333",
                  borderRadius: "10px", padding: "16px", fontSize: "15px", fontWeight: "700", cursor: "pointer",
                }}
              >
                ← Back
              </button>
              <button
                onClick={handleCheckout}
                disabled={loading}
                style={{
                  flex: 2, background: "#FF3A6E", color: "#fff", border: "none",
                  borderRadius: "10px", padding: "16px", fontSize: "16px", fontWeight: "800",
                  cursor: loading ? "not-allowed" : "pointer", letterSpacing: "-0.3px",
                }}
              >
                {loading ? "Redirecting..." : `Pay $${selectedPackage.price} →`}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}