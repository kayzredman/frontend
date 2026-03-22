"use client";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export function NavBar() {
  const { isSignedIn } = useUser();
  return (
    <nav style={{
      display: "flex",
      gap: 24,
      alignItems: "center",
      padding: "16px 32px",
      background: "#f5f5f5",
      borderBottom: "1px solid #eee"
    }}>
      <Link href="/">Home</Link>
      <Link href="/user">Profile</Link>
      <Link href="/posts">Posts</Link>
      {isSignedIn && <span style={{marginLeft: "auto"}}><UserButton afterSignOutUrl="/" /></span>}
    </nav>
  );
}
