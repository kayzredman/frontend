"use client";

import { useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export default function PostPage() {
  const [message, setMessage] = useState("");
  const [platforms, setPlatforms] = useState({
    instagram: true,
    facebook: false,
    twitter: false,
    whatsapp: false,
  });

  // Placeholder for engagement prediction
  const engagement = "High";

  return (
    <div style={{ padding: "40px 0", display: "flex", flexDirection: "column", alignItems: "center", background: "#fff", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 8, color: "#181b20" }}>Publisher</h1>
      <p style={{ color: "#6b7280", marginBottom: 32, fontSize: "1.2rem" }}>
        Create and publish content across all your platforms
      </p>
      <div style={{ display: "flex", gap: 32, width: "100%", maxWidth: 1200, background: "#fff" }}>
        {/* Left: Content Editor */}
        <div style={{ flex: 2, background: "#fff", borderRadius: 16, padding: 32, boxShadow: "0 4px 24px 0 rgba(44, 62, 80, 0.10)", minWidth: 340 }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 18, color: "#181b20" }}>Content Editor</h2>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="message" style={{ fontWeight: 700, marginBottom: 6, display: "block", color: "#181b20" }}>Your Message</label>
            <textarea
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Write your devotional, message, or inspiration here..."
              maxLength={2200}
              rows={6}
              style={{ width: "100%", borderRadius: 12, border: "1.5px solid #e5e7eb", padding: 18, fontSize: "1.1rem", resize: "vertical", background: "#fafbfc", color: "#181b20" }}
            />
            <div style={{ color: "#888", fontSize: 13, marginTop: 4, textAlign: "right" }}>
              {message.length} characters
              <span style={{ marginLeft: 8, color: "#bbb" }}>Max: 2200 chars</span>
          </div>
        </div>
        <div style={{ marginBottom: 18 }}>
            <div style={{ fontWeight: 700, marginBottom: 8, color: "#181b20" }}>Select Platforms</div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {/* Instagram */}
              <label style={{
                flex: 1,
                minWidth: 120,
                maxWidth: 140,
                background: platforms.instagram ? "#f6f0ff" : "#fff",
                border: platforms.instagram ? "2px solid #a259f7" : "2px solid #e5e7eb",
                borderRadius: 14,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                fontWeight: 500,
                boxShadow: platforms.instagram ? "0 2px 8px 0 rgba(162,89,247,0.08)" : undefined,
                transition: "border 0.2s, box-shadow 0.2s",
                position: "relative",
                height: 90,
                justifyContent: "center"
              }}>
                <input type="checkbox" checked={platforms.instagram} onChange={e => setPlatforms(p => ({ ...p, instagram: e.target.checked }))} style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }} aria-label="Instagram" />
                <FaInstagram style={{ fontSize: 32, color: "#E1306C", marginTop: 12 }} />
                <span style={{ color: "#888", fontWeight: 400, fontSize: 13, marginTop: 8 }}>@faithchurch</span>
              </label>
              {/* Facebook */}
              <label style={{
                flex: 1,
                minWidth: 120,
                maxWidth: 140,
                background: platforms.facebook ? "#f6f0ff" : "#fff",
                border: platforms.facebook ? "2px solid #1877f3" : "2px solid #e5e7eb",
                borderRadius: 14,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                fontWeight: 500,
                boxShadow: platforms.facebook ? "0 2px 8px 0 rgba(24,119,243,0.08)" : undefined,
                transition: "border 0.2s, box-shadow 0.2s",
                position: "relative",
                height: 90,
                justifyContent: "center"
              }}>
                <input type="checkbox" checked={platforms.facebook} onChange={e => setPlatforms(p => ({ ...p, facebook: e.target.checked }))} style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }} aria-label="Facebook" />
                <FaFacebookF style={{ fontSize: 32, color: "#1877f3", marginTop: 12 }} />
                <span style={{ color: "#888", fontWeight: 400, fontSize: 13, marginTop: 8 }}>Faith Church</span>
              </label>
              {/* Twitter/X */}
              <label style={{
                flex: 1,
                minWidth: 120,
                maxWidth: 140,
                background: platforms.twitter ? "#f6f0ff" : "#fff",
                border: platforms.twitter ? "2px solid #000" : "2px solid #e5e7eb",
                borderRadius: 14,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                fontWeight: 500,
                boxShadow: platforms.twitter ? "0 2px 8px 0 rgba(0,0,0,0.08)" : undefined,
                transition: "border 0.2s, box-shadow 0.2s",
                position: "relative",
                height: 90,
                justifyContent: "center"
              }}>
                <input type="checkbox" checked={platforms.twitter} onChange={e => setPlatforms(p => ({ ...p, twitter: e.target.checked }))} style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }} aria-label="X (Twitter)" />
                <FaXTwitter style={{ fontSize: 32, color: "#000", marginTop: 12 }} />
                <span style={{ color: "#888", fontWeight: 400, fontSize: 13, marginTop: 8 }}>@faithchurchorg</span>
              </label>
              {/* WhatsApp */}
              <label style={{
                flex: 1,
                minWidth: 120,
                maxWidth: 140,
                background: platforms.whatsapp ? "#f6f0ff" : "#fff",
                border: platforms.whatsapp ? "2px solid #25d366" : "2px solid #e5e7eb",
                borderRadius: 14,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                fontWeight: 500,
                boxShadow: platforms.whatsapp ? "0 2px 8px 0 rgba(37,211,102,0.08)" : undefined,
                transition: "border 0.2s, box-shadow 0.2s",
                position: "relative",
                height: 90,
                justifyContent: "center"
              }}>
                <input type="checkbox" checked={platforms.whatsapp} onChange={e => setPlatforms(p => ({ ...p, whatsapp: e.target.checked }))} style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }} aria-label="WhatsApp" />
                <FaWhatsapp style={{ fontSize: 32, color: "#25d366", marginTop: 12 }} />
                <span style={{ color: "#888", fontWeight: 400, fontSize: 13, marginTop: 8 }}>+1 234-567-8901</span>
              </label>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
            <button style={{ flex: 1, background: "linear-gradient(90deg, #7c3aed, #2de1fc)", color: "#fff", border: "none", borderRadius: 10, padding: "14px 0", fontWeight: 700, fontSize: "1.1rem", cursor: "pointer", boxShadow: "0 2px 8px 0 rgba(44, 62, 80, 0.10)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <span style={{ fontSize: 20 }}>✈️</span> Publish Now
            </button>
            <button style={{ flex: 1, background: "#fff", color: "#7c3aed", border: "2px solid #e5e7eb", borderRadius: 10, padding: "14px 0", fontWeight: 700, fontSize: "1.1rem", cursor: "pointer", boxShadow: "0 2px 8px 0 rgba(44, 62, 80, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <span style={{ fontSize: 20 }}>📅</span> Schedule
            </button>
          </div>
        </div>
        {/* Right: AI Assistant, Best Practices, Engagement Predictor */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, background: "#fff" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 8px 0 rgba(44, 62, 80, 0.10)" }}>
            <div style={{ fontWeight: 600, marginBottom: 12, color: "#7c3aed" }}>AI Growth Assistant</div>
            <button style={{ width: "100%", background: "#f6f0ff", border: "1.5px solid #e5e7eb", borderRadius: 8, padding: "10px 0", fontWeight: 500, fontSize: "1rem", color: "#7c3aed", marginBottom: 8, cursor: "pointer" }}>Generate Caption</button>
            <button style={{ width: "100%", background: "#f6f0ff", border: "1.5px solid #e5e7eb", borderRadius: 8, padding: "10px 0", fontWeight: 500, fontSize: "1rem", color: "#7c3aed", cursor: "pointer" }}>Add Hashtags</button>
          </div>
          <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 8px 0 rgba(44, 62, 80, 0.10)" }}>
            <div style={{ fontWeight: 600, marginBottom: 12, color: "#181b20" }}>Best Practices</div>
            <ul style={{ color: "#222", fontSize: 15, paddingLeft: 18, margin: 0 }}>
              <li>✓ Post during peak hours (7-9 AM)</li>
              <li>✓ Use 3-5 relevant hashtags</li>
              <li>✓ Include emojis for engagement</li>
              <li>✓ Add a call-to-action</li>
              <li>✓ Keep captions concise</li>
            </ul>
          </div>
          <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 8px 0 rgba(44, 62, 80, 0.10)" }}>
            <div style={{ fontWeight: 600, marginBottom: 12, color: "#181b20" }}>Engagement Predictor</div>
            <div style={{ color: "#10b981", fontWeight: 700, marginBottom: 6 }}>Predicted Engagement: {engagement}</div>
            <div style={{ width: "100%", height: 8, background: "#e5e7eb", borderRadius: 4, marginBottom: 6 }}>
              <div style={{ width: "80%", height: 8, background: "#10b981", borderRadius: 4 }} />
            </div>
            <div style={{ color: "#888", fontSize: 13 }}>Based on content quality, timing, and hashtags</div>
          </div>
        </div>
      </div>
      {/* Platform Previews */}
      <div style={{ marginTop: 40, width: "100%", maxWidth: 900, background: "#fff", borderRadius: 16, padding: 32, boxShadow: "0 2px 8px 0 rgba(44, 62, 80, 0.10)" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 18, color: "#181b20" }}>Platform Previews</h2>
        <div style={{ display: "flex", gap: 12, marginBottom: 18, flexWrap: "wrap" }}>
          <button style={{ flex: 1, minWidth: 120, background: "#f6f0ff", border: "none", borderRadius: 20, padding: "10px 0", fontWeight: 600, fontSize: "1rem", color: "#1877f3", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}><FaFacebookF style={{ fontSize: 20, color: "#1877f3" }} />Facebook</button>
          <button style={{ flex: 1, minWidth: 120, background: "#f6f0ff", border: "none", borderRadius: 20, padding: "10px 0", fontWeight: 600, fontSize: "1rem", color: "#000", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}><FaXTwitter style={{ fontSize: 20, color: "#000" }} />X (Twitter)</button>
          <button style={{ flex: 1, minWidth: 120, background: "#f6f0ff", border: "none", borderRadius: 20, padding: "10px 0", fontWeight: 600, fontSize: "1rem", color: "#25d366", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}><FaWhatsapp style={{ fontSize: 20, color: "#25d366" }} />WhatsApp</button>
        </div>
        <div style={{ background: "#fff", borderRadius: 12, padding: 24, minHeight: 120, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #a259f7, #f6f0ff)", display: "flex", alignItems: "center", justifyContent: "center" }} />
            <div>
              <div style={{ fontWeight: 600 }}>@faithchurch</div>
            </div>
          </div>
          <div style={{ color: "#bbb", fontSize: 15, marginTop: 12 }}>
            Your content preview will appear here
          </div>
        </div>
        <button style={{ marginTop: 18, background: "#f6f0ff", border: "none", borderRadius: 10, padding: "12px 0", fontWeight: 600, fontSize: "1rem", color: "#7c3aed", cursor: "pointer", width: "100%", maxWidth: 320, alignSelf: "center" }}>✧ Optimize for Instagram</button>
      </div>
    </div>
  );
}
