"use client";

// Dummy user data
const user = {
  name: "Pastor John Smith",
  email: "pastor.john@faithchurch.org",
  role: "Content Creator",
  organization: "Faith Church",
  bio: "Tell us about your ministry...",
  photo: "", // Placeholder, could use a default avatar
  joined: "January 2024",
  lastActive: "March 23, 2026",
  location: "Dallas, TX",
  posts: 128,
  followers: 26710,
  engagement: "5.7%",
};

export default function ProfilePage() {
  return (
    <div style={{ padding: "40px 0", background: "#fff", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 8, color: "#181b20" }}>Profile</h1>
      <p style={{ color: "#181b20", marginBottom: 32, fontSize: "1.2rem", fontWeight: 500 }}>
        View your account details and activity
      </p>
      <div style={{ width: "100%", maxWidth: 900, background: "#fff", borderRadius: 24, boxShadow: "0 2px 8px 0 rgba(44, 62, 80, 0.10)", padding: 40, marginBottom: 40, display: "flex", gap: 40, alignItems: "flex-start" }}>
        {/* Profile Photo and Basic Info */}
        <div style={{ minWidth: 180, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <div style={{ width: 120, height: 120, borderRadius: "50%", background: "#f3f4f6", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, color: "#a78bfa", fontWeight: 700, marginBottom: 8 }}>
            {user.photo ? <img src={user.photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span>👤</span>}
          </div>
          <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 2, color: "#181b20" }}>{user.name}</div>
          <div style={{ color: "#181b20", fontSize: 15, fontWeight: 600 }}>{user.role}</div>
          <div style={{ color: "#7c3aed", fontWeight: 700, fontSize: 15, marginTop: 4 }}>{user.organization}</div>
        </div>
        {/* Details Card */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", gap: 24 }}>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#181b20", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Email</div>
              <div style={{ background: "#f3f4f6", borderRadius: 10, padding: "12px 18px", fontSize: 17, fontWeight: 500 }}>{user.email}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#181b20", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Location</div>
              <div style={{ background: "#f3f4f6", borderRadius: 10, padding: "12px 18px", fontSize: 17, fontWeight: 500 }}>{user.location}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#181b20", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Joined</div>
              <div style={{ background: "#f3f4f6", borderRadius: 10, padding: "12px 18px", fontSize: 17, fontWeight: 500 }}>{user.joined}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#181b20", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Last Active</div>
              <div style={{ background: "#f3f4f6", borderRadius: 10, padding: "12px 18px", fontSize: 17, fontWeight: 500 }}>{user.lastActive}</div>
            </div>
          </div>
          <div>
            <div style={{ color: "#181b20", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Bio</div>
            <div style={{ background: "#f3f4f6", borderRadius: 10, padding: "12px 18px", fontSize: 17, fontWeight: 500 }}>{user.bio}</div>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#181b20", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Posts</div>
              <div style={{ background: "#f3f4f6", borderRadius: 10, padding: "12px 18px", fontSize: 17, fontWeight: 500 }}>{user.posts}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#181b20", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Followers</div>
              <div style={{ background: "#f3f4f6", borderRadius: 10, padding: "12px 18px", fontSize: 17, fontWeight: 500 }}>{user.followers.toLocaleString()}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#181b20", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Engagement Rate</div>
              <div style={{ background: "#f3f4f6", borderRadius: 10, padding: "12px 18px", fontSize: 17, fontWeight: 500 }}>{user.engagement}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
