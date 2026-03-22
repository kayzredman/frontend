import { UserButton } from '@clerk/nextjs';

export default function UserPage() {
  return (
    <div style={{ padding: 32 }}>
      <h2>User Profile</h2>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
