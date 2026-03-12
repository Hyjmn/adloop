"use client"
import { useState, useEffect, useRef, useCallback } from "react";
import { supabase } from '../../lib/supabase'



function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill={filled ? "#FF3A6E" : "none"} stroke={filled ? "#FF3A6E" : "currentColor"} strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function BookmarkIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "#fff" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function AdCard({ ad, index }: { ad: any, index: number }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
  ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        background: "#0A0A0A",
        borderRadius: "0px",
        marginBottom: "2px",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "12px 16px", background: "#0A0A0A",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 42, height: 42, borderRadius: "50%",
            background: `linear-gradient(135deg, ${ad.bg_color}, ${ad.accent_color})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "13px", fontWeight: "800", color: "#fff", letterSpacing: "-0.5px",
            flexShrink: 0,
          }}>
            {ad.brand ? ad.brand[0] : '?'}
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#fff", fontWeight: "700", fontSize: "14px", letterSpacing: "-0.2px" }}>
                {ad.handle}
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill={ad.accent_color}>
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "1px" }}>
              <span style={{
                background: `${ad.bg_color}33`, color: ad.accent_color,
                fontSize: "10px", fontWeight: "700", padding: "1px 6px",
                borderRadius: "3px", letterSpacing: "0.5px", textTransform: "uppercase",
              }}>
                Sponsored
              </span>
              <span style={{ color: "#666", fontSize: "11px" }}>{ad.category}</span>
            </div>
          </div>
        </div>
        <button style={{ background: "none", border: "none", color: "#888", cursor: "pointer", padding: "4px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="19" r="2" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}>
        <img
          src={ad.image_url}
          alt={ad.headline}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "50%",
          background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
          pointerEvents: "none",
        }} />
        {/* CTA Badge */}
        <div style={{
          position: "absolute", bottom: 16, left: 16, right: 16,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{
              color: "#fff", fontSize: "17px", fontWeight: "800",
              letterSpacing: "-0.5px", lineHeight: 1.2, maxWidth: "220px",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}>
              {ad.headline}
            </div>
          </div>
          <button style={{
            background: ad.accent_color, color: ad.bg_color,
            border: "none", borderRadius: "8px",
            padding: "10px 16px", fontSize: "13px", fontWeight: "800",
            cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0, marginLeft: "12px",
            letterSpacing: "-0.2px", boxShadow: `0 4px 20px ${ad.accent_color}44`,
          }}>
            {ad.cta_text} →
          </button>
        </div>
      </div>

      {/* Actions */}
      <div style={{ padding: "12px 16px 4px", background: "#0A0A0A" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
          <div style={{ display: "flex", gap: "16px" }}>
            <button
              onClick={() => setLiked(!liked)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 0, display: "flex", alignItems: "center", gap: "6px" }}
            >
              <HeartIcon filled={liked} />
            </button>
            <button style={{ background: "none", border: "none", cursor: "pointer", color: "#aaa", padding: 0 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </button>
            <button style={{ background: "none", border: "none", cursor: "pointer", color: "#aaa", padding: 0 }}>
              <ShareIcon />
            </button>
          </div>
          <button
            onClick={() => setSaved(!saved)}
            style={{ background: "none", border: "none", cursor: "pointer", color: saved ? "#fff" : "#aaa", padding: 0 }}
          >
            <BookmarkIcon filled={saved} />
          </button>
        </div>

        <div style={{ color: "#fff", fontSize: "14px", fontWeight: "700", marginBottom: "4px" }}>
          {liked ? `${ad.likes.replace("K", "")} + 1 likes` : `${ad.likes} likes`}
        </div>
        <div style={{ color: "#888", fontSize: "13px", marginBottom: "12px" }}>
          <span style={{ color: "#ccc", fontWeight: "600" }}>{ad.brand}</span>{" "}
          {ad.headline}
        </div>

        <div style={{ color: "#555", fontSize: "12px", marginBottom: "16px", letterSpacing: "0.2px" }}>
          View ad details
        </div>
      </div>
    </div>
  );
}

function LoadingDots() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "8px", padding: "24px" }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 8, height: 8, borderRadius: "50%", background: "#444",
          animation: "pulse 1.2s ease-in-out infinite",
          animationDelay: `${i * 0.2}s`,
        }} />
      ))}
    </div>
  );
}

export default function AdFeed() {
  const [ads, setAds] = useState<any[]>([]);
  useEffect(() => {
  async function loadAds() {
    const { data, error } = await supabase
      .from('ads')
      .select('*')
      .limit(4)
    if (data) setAds(data)
  }
  loadAds()
}, [])
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(4);

  const loadMore = useCallback(() => {
  if (loading) return
  setLoading(true)
  supabase
    .from('ads')
    .select('*')
    .range(ads.length, ads.length + 3)
    .then(({ data }: { data: any }) => {
      if (data) setAds(prev => [...prev, ...(data as any[])])
      setLoading(false)
    })
}, [loading, ads.length])

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && ads.length > 0) loadMore(); },
      { threshold: 0.1 }
    );
    if (loaderRef.current) obs.observe(loaderRef.current);
    return () => obs.disconnect();
  }, [loadMore, ads.length]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #000; }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
        ::-webkit-scrollbar { width: 0; }
      `}</style>

      <div style={{ background: "#000", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
        {/* Top Nav */}
        <div style={{
          position: "sticky", top: 0, zIndex: 100,
          background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)",
          borderBottom: "1px solid #1a1a1a",
          padding: "14px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ color: "#fff", fontSize: "22px", fontWeight: "800", letterSpacing: "-1px" }}>
            adloop<span style={{ color: "#FF3A6E" }}>.</span>
          </div>
          <div style={{ display: "flex", gap: "18px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>
    <div style={{
  overflowX: "auto",
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  padding: "14px 16px",
  background: "#0A0A0A",
  borderBottom: "1px solid #1a1a1a",
  position: "sticky",
  top: 56,
  zIndex: 99,
}}>
  {ads.slice(0, 8).map((ad: any) => (
  <div key={ad.id} style={{ flexShrink: 0, textAlign: "center" }}>
    <div style={{
      width: 62, height: 62, borderRadius: "50%",
      background: `linear-gradient(135deg, ${ad.bg_color || '#FF3A00'}, ${ad.accent_color || '#FFD700'})`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: "18px", fontWeight: "800", color: "#fff",
      border: "2px solid #333",
    }}>
      {ad.brand ? ad.brand[0] : '?'}
    </div>
    <div style={{ color: "#888", fontSize: "11px", marginTop: "5px", maxWidth: "64px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
      {ad.brand}
    </div>
  </div>
))}
</div>

        {/* Feed */}
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          {ads.map((ad, i) => (
            <AdCard key={ad.id} ad={ad} index={i % 4} />
          ))}
          <div ref={loaderRef}>
            {loading && <LoadingDots />}
          </div>
        </div>
      </div>
    </>
  );
}