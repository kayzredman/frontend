"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Page() {
  const { isSignedIn } = useUser();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>FaithReach Demo</h1>
          {isSignedIn ? (
            <p>
              Welcome! Go to your <Link href="/user">User Profile</Link> or <span style={{display: 'inline-block'}}><UserButton afterSignOutUrl="/" /></span>
            </p>
          ) : (
            <p>
              <Link href="/sign-in">Sign In</Link> or <Link href="/sign-up">Sign Up</Link> to get started.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
