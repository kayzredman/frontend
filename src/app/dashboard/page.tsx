"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import Image from "next/image";

export default function DashboardPage() {
  const { isSignedIn } = useUser();
  // Redirect to sign-in if not signed in
  useEffect(() => {
    if (!isSignedIn && typeof window !== 'undefined') {
      window.location.href = '/sign-in/clerk';
    }
  }, [isSignedIn]);
  if (!isSignedIn) {
    return null;
  }
  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 8 }}>Dashboard</h1>
      <p style={{ color: "#6b7280", marginBottom: 32, fontSize: "1.2rem" }}>
        Welcome back! Here&apos;s your content overview.
      </p>
      <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
        <MetricCard title="Total Followers" value="26,710" change="+8.3% from last week" />
        <MetricCard title="Engagement" value="12,450" sub="5.7% engagement rate" />
        <MetricCard title="Total Reach" value="48,920" change="+12.4% from last week" />
        <MetricCard title="Posts This Week" value="7" sub="Across all platforms" />
      </div>
      <div style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 32 }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 16 }}>Growth Trends</h2>
        {/* Image removed: dashboard-growth-trend.png not available during prestaging */}
      </div>
      <div style={{ display: "flex", gap: 24 }}>
        <div style={{ flex: 1, background: "#fff", borderRadius: 16, padding: 24 }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 16 }}>Upcoming Posts</h3>
          <div style={{ marginBottom: 16 }}>
            <b>Sunday Reflection:</b> In the midst of life&apos;s storms, anchor yourself in God&apos;s unchanging promises. He is your rock and refuge. <span role="img" aria-label="rock">🪨</span><span role="img" aria-label="church">⛪️</span> #SundayThoughts...
            <div style={{ color: "#6b7280", fontSize: 12 }}>Mar 23, 9:00 AM · <span style={{ background: "#e0f7fa", color: "#007b8a", borderRadius: 8, padding: "2px 8px", marginRight: 4 }}>instagram</span> <span style={{ background: "#e0f7fa", color: "#007b8a", borderRadius: 8, padding: "2px 8px" }}>facebook</span></div>
          </div>
          <div>
            <b>Mid-week encouragement:</b> You are stronger than you think because God is stronger than anything you face. Keep pushing forward! <span role="img" aria-label="muscle">💪</span><span role="img" aria-label="pray">🙏</span>...
            <div style={{ color: "#6b7280", fontSize: 12 }}>Mar 26, 12:00 PM · <span style={{ background: "#e0f7fa", color: "#007b8a", borderRadius: 8, padding: "2px 8px", marginRight: 4 }}>instagram</span> <span style={{ background: "#e0f7fa", color: "#007b8a", borderRadius: 8, padding: "2px 8px" }}>facebook</span></div>
          </div>
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: 16, padding: 24 }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 16 }}>Active Content Series</h3>
          <div style={{ marginBottom: 16 }}>
            <b>30-Day Prayer Journey</b>
            <div style={{ color: "#6b7280", fontSize: 12 }}>Prayer &amp; Spiritual Growth · 30 posts · Mar 1 - Mar 30</div>
          </div>
          <div>
            <b>Walking by Faith</b>
            <div style={{ color: "#6b7280", fontSize: 12 }}>Faith &amp; Trust · 12 posts · Mar 15 - Apr 15</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}>
        <button style={{ background: "linear-gradient(90deg, #7c3aed, #2de1fc)", color: "#fff", border: "none", borderRadius: 24, padding: "14px 40px", fontWeight: 700, fontSize: "1.1rem", cursor: "pointer" }}>
          Create New Post
        </button>
        <button style={{ marginLeft: 16, background: "#fff", color: "#7c3aed", border: "2px solid #7c3aed", borderRadius: 24, padding: "14px 40px", fontWeight: 700, fontSize: "1.1rem", cursor: "pointer" }}>
          View Full Analytics
        </button>
      </div>
    </div>
  );
}

function MetricCard({ title, value, change, sub }: { title: string; value: string; change?: string; sub?: string }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: 24, minWidth: 200, flex: 1 }}>
      <div style={{ color: "#6b7280", fontWeight: 600, marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 4 }}>{value}</div>
      {change && <div style={{ color: "#16a34a", fontSize: 14 }}>{change}</div>}
      {sub && <div style={{ color: "#6b7280", fontSize: 14 }}>{sub}</div>}
    </div>
  );
}
