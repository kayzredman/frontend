"use client";

import { useState } from "react";
import styles from "./settings.module.css";

const initialProfile = {
  fullName: "Pastor John Smith",
  email: "pastor.john@faithchurch.org",
  role: "Content Creator",
  organization: "Faith Church",
  bio: "",
};

export default function SettingsPage() {
  const [tab, setTab] = useState("Profile");
  const [profile, setProfile] = useState(initialProfile);
  const [photo, setPhoto] = useState<string | null>(null);
  const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });
  const [emailPrefs, setEmailPrefs] = useState({
    scheduled: true,
    engagement: true,
    followers: true,
    tips: true,
  });

  // Simulate connected platforms
  const platforms = [
    { name: "Instagram", handle: "@faithchurch", connected: true },
    { name: "Facebook", handle: "Faith Church Community", connected: true },
    { name: "X (Twitter)", handle: "@faithchurchorg", connected: true },
    { name: "YouTube", handle: "", connected: false },
  ];

  // Simulate plan
  const plan = {
    name: "Pro Plan",
    price: 29,
    features: [
      "Unlimited posts across all platforms",
      "Advanced analytics and insights",
      "AI Growth Assistant",
      "Priority support",
    ],
    nextBilling: "April 22, 2026",
    card: "4242",
    history: [
      { date: "March 22, 2026", amount: 29 },
      { date: "February 22, 2026", amount: 29 },
      { date: "January 22, 2026", amount: 29 },
    ],
  };

  return (
    <div className={styles.settingsContainer}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 8 }}>Settings</h1>
      <p style={{ color: "#6b7280", marginBottom: 32, fontSize: "1.2rem" }}>
        Manage your account, connections, and preferences
      </p>
      {/* Tabs */}
      <div className={styles.settingsTabs}>
        {['Profile', 'Platforms', 'Notifications', 'Billing'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={styles.settingsTabButton + (tab === t ? ' ' + styles.active : '')}
          >
            {t}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className={styles.settingsCard}>
        {tab === "Profile" && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
            {/* Profile Info */}
            <div style={{ flex: 1, minWidth: 320 }}>
              <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 18 }}>Profile Information</div>
              <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 24 }}>
                <img src={photo || "/avatar.png"} alt="Profile" style={{ width: 90, height: 90, borderRadius: "50%", objectFit: "cover", border: "2px solid #eee" }} />
                <div>
                  <button style={{ padding: "8px 18px", borderRadius: 8, border: "1.5px solid #e5e7eb", background: "#fff", fontWeight: 500, cursor: "pointer", marginBottom: 6 }}>Change Photo</button>
                  <div style={{ color: "#888", fontSize: 13 }}>JPG, PNG or GIF. Max size 2MB</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 24, marginBottom: 18 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#888", fontSize: 14, marginBottom: 4 }}>Full Name</div>
                  <input value={profile.fullName} onChange={e => setProfile(p => ({ ...p, fullName: e.target.value }))} style={{ width: "100%", borderRadius: 8, border: "none", background: "#f3f4f6", padding: "12px 14px", fontSize: "1.08rem", marginBottom: 8, color: "#181b20" }} />
                  <div style={{ color: "#888", fontSize: 14, marginBottom: 4 }}>Role</div>
                  <input value={profile.role} onChange={e => setProfile(p => ({ ...p, role: e.target.value }))} style={{ width: "100%", borderRadius: 8, border: "none", background: "#f3f4f6", padding: "12px 14px", fontSize: "1.08rem", marginBottom: 8, color: "#181b20" }} />
                  <div style={{ color: "#888", fontSize: 14, marginBottom: 4 }}>Bio</div>
                  <input value={profile.bio} onChange={e => setProfile(p => ({ ...p, bio: e.target.value }))} placeholder="Tell us about your ministry..." style={{ width: "100%", borderRadius: 8, border: "none", background: "#f3f4f6", padding: "12px 14px", fontSize: "1.08rem", color: "#181b20" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#888", fontSize: 14, marginBottom: 4 }}>Email</div>
                  <input value={profile.email} onChange={e => setProfile(p => ({ ...p, email: e.target.value }))} style={{ width: "100%", borderRadius: 8, border: "none", background: "#f3f4f6", padding: "12px 14px", fontSize: "1.08rem", marginBottom: 8, color: "#181b20" }} />
                  <div style={{ color: "#888", fontSize: 14, marginBottom: 4 }}>Organization</div>
                  <input value={profile.organization} onChange={e => setProfile(p => ({ ...p, organization: e.target.value }))} style={{ width: "100%", borderRadius: 8, border: "none", background: "#f3f4f6", padding: "12px 14px", fontSize: "1.08rem", color: "#181b20" }} />
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
                <button style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: "#f3f4f6", color: "#222", fontWeight: 600, fontSize: "1.08rem", cursor: "pointer" }}>Cancel</button>
                <button style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: "#11111a", color: "#fff", fontWeight: 600, fontSize: "1.08rem", cursor: "pointer" }}>Save Changes</button>
              </div>
            </div>
          </div>
        )}
        {tab === "Platforms" && (
          <div>
            <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 18 }}>Connected Platforms</div>
            {platforms.map((p, i) => (
              <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 18, background: "#fafbfc", borderRadius: 12, padding: 18, marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #a259f7, #f6f0ff)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff", fontSize: 22 }}>{p.name[0]}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>{p.name}</div>
                  <div style={{ color: "#888", fontSize: 14 }}>{p.connected ? `Connected as ${p.handle}` : "Not connected"}</div>
                </div>
                {p.connected ? (
                  <>
                    <span style={{ color: "#10b981", fontWeight: 600, fontSize: 15, marginRight: 8 }}>✓ Connected</span>
                    <button style={{ padding: "8px 18px", borderRadius: 8, border: "1.5px solid #e5e7eb", background: "#fff", fontWeight: 500, cursor: "pointer" }}>Disconnect</button>
                  </>
                ) : (
                  <button style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: "#11111a", color: "#fff", fontWeight: 600, cursor: "pointer" }}>Connect</button>
                )}
              </div>
            ))}
            <div style={{ marginTop: 32, background: "#fafbfc", borderRadius: 12, padding: 18 }}>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>OAuth Permissions</div>
              <ul style={{ color: "#222", fontSize: 15, paddingLeft: 18, margin: 0 }}>
                <li>✓ Publish posts on your behalf</li>
                <li>✓ Read engagement metrics and analytics</li>
                <li>✓ Manage scheduled posts</li>
                <li style={{ color: "#e11d48" }}>✗ We never access your private messages</li>
                <li style={{ color: "#e11d48" }}>✗ We never modify your account settings</li>
              </ul>
            </div>
          </div>
        )}
        {tab === "Notifications" && (
          <div>
            <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 18 }}>Notification Preferences</div>
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontWeight: 500 }}>Email Notifications</div>
              <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>Receive email updates about your posts and engagement</div>
              <input type="checkbox" checked={emailPrefs.scheduled} onChange={e => setEmailPrefs(p => ({ ...p, scheduled: e.target.checked }))} /> When a scheduled post is published
              <br />
              <input type="checkbox" checked={emailPrefs.engagement} onChange={e => setEmailPrefs(p => ({ ...p, engagement: e.target.checked }))} /> When you reach engagement milestones
              <br />
              <input type="checkbox" checked={emailPrefs.followers} onChange={e => setEmailPrefs(p => ({ ...p, followers: e.target.checked }))} /> When you gain new followers
              <br />
              <input type="checkbox" checked={emailPrefs.tips} onChange={e => setEmailPrefs(p => ({ ...p, tips: e.target.checked }))} /> Growth tips and best practices
            </div>
            <div style={{ fontWeight: 500, marginBottom: 8 }}>Push Notifications</div>
            <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>Get notified about important updates and milestones</div>
            <input type="checkbox" /> Enable push notifications
            <div style={{ fontWeight: 500, marginTop: 18, marginBottom: 8 }}>Weekly Report</div>
            <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>Receive a weekly summary of your analytics and growth</div>
            <input type="checkbox" /> Enable weekly report
          </div>
        )}
        {tab === "Billing" && (
          <div>
            <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 18 }}>Current Plan</div>
            <div style={{ background: "#fafbfc", borderRadius: 16, padding: 32, border: "2px solid #a259f7", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.3rem", color: "#7c3aed", marginBottom: 6 }}>{plan.name}</div>
                <div style={{ color: "#888", fontSize: 15, marginBottom: 12 }}>For growing ministries</div>
                <ul style={{ color: "#222", fontSize: 15, paddingLeft: 18, margin: 0 }}>
                  {plan.features.map(f => <li key={f}>✓ {f}</li>)}
                </ul>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 700, fontSize: "2rem", color: "#a259f7" }}>${plan.price}</div>
                <div style={{ color: "#888", fontSize: 15 }}>/month</div>
                <button style={{ marginTop: 18, padding: "8px 18px", borderRadius: 8, border: "1.5px solid #a259f7", background: "#fff", fontWeight: 500, color: "#a259f7", cursor: "pointer" }}>Change Plan</button>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 }}>
              <div>Next billing date</div>
              <div>{plan.nextBilling}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 }}>
              <div>Payment method</div>
              <div>•••• •••• •••• {plan.card}</div>
            </div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Billing History</div>
            <div style={{ background: "#fafbfc", borderRadius: 12, padding: 18 }}>
              {plan.history.map((h, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <div>{h.date}</div>
                  <div style={{ fontWeight: 600 }}>${h.amount.toFixed(2)} <span style={{ color: "#10b981", marginLeft: 8 }}>Paid</span></div>
                  <button style={{ padding: "6px 14px", borderRadius: 8, border: "1.5px solid #e5e7eb", background: "#fff", fontWeight: 500, cursor: "pointer" }}>Download</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Security & Danger Zone */}
      {tab === "Profile" && (
        <div className={styles.settingsCard}>
          <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 18 }}>Security</div>
          <div style={{ display: "flex", gap: 24, marginBottom: 18 }}>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#888", fontSize: 14, marginBottom: 4 }}>Current Password</div>
              <input type="password" value={passwords.current} onChange={e => setPasswords(p => ({ ...p, current: e.target.value }))} style={{ width: "100%", borderRadius: 8, border: "none", background: "#f3f4f6", padding: "12px 14px", fontSize: "1.08rem", marginBottom: 8, color: "#181b20" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#888", fontSize: 14, marginBottom: 4 }}>New Password</div>
              <input type="password" value={passwords.new} onChange={e => setPasswords(p => ({ ...p, new: e.target.value }))} style={{ width: "100%", borderRadius: 8, border: "none", background: "#f3f4f6", padding: "12px 14px", fontSize: "1.08rem", marginBottom: 8, color: "#181b20" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#888", fontSize: 14, marginBottom: 4 }}>Confirm New Password</div>
              <input type="password" value={passwords.confirm} onChange={e => setPasswords(p => ({ ...p, confirm: e.target.value }))} style={{ width: "100%", borderRadius: 8, border: "none", background: "#f3f4f6", padding: "12px 14px", fontSize: "1.08rem", color: "#181b20" }} />
            </div>
          </div>
          <button style={{ padding: "10px 24px", borderRadius: 8, border: "1.5px solid #e5e7eb", background: "#fff", fontWeight: 500, cursor: "pointer", marginBottom: 24 }}>Update Password</button>
          <div style={{ background: "#fff0f0", border: "1.5px solid #fca5a5", borderRadius: 12, padding: 24, marginTop: 24 }}>
            <div style={{ color: "#e11d48", fontWeight: 700, marginBottom: 8 }}>Danger Zone</div>
            <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 12 }}>
              <button style={{ padding: "10px 24px", borderRadius: 8, border: "1.5px solid #e5e7eb", background: "#fff", fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 18 }}>↩️</span> Log Out
              </button>
              <button style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: "#e11d48", color: "#fff", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 18 }}>🗑️</span> Delete Account
              </button>
            </div>
            <div style={{ color: "#888", fontSize: 14 }}>Sign out of your FaithReach account or permanently delete your account and all data</div>
          </div>
        </div>
      )}
    </div>
  );
}
