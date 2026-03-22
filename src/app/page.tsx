"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../app/auth-panel.css';

export default function Page() {
  const router = useRouter();
  return (
    <div
      className="auth-panel-bg"
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: `url('/reachoutbkg.png') center center / cover no-repeat fixed`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="auth-panel-container" style={{ background: 'rgba(24,27,32,0.92)' }}>
        <div className="auth-panel-main" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 4, color: '#fff' }}>Welcome to FaithReach</h2>
          <p style={{ color: '#bfc4ca', marginBottom: 20, fontSize: '1.05rem' }}>
            Sign in to get started with your faith-based content journey.
          </p>
          <button
            type="button"
            style={{
              background: '#2de1fc',
              color: '#181b20',
              border: 'none',
              borderRadius: 24,
              padding: '12px 40px',
              fontWeight: 700,
              fontSize: '1.1rem',
              cursor: 'pointer',
              marginTop: 8,
              marginBottom: 16,
              transition: 'background 0.2s',
              width: '100%',
              maxWidth: 220,
            }}
            onClick={() => router.push('/sign-in/clerk')}
          >
            SIGN IN
          </button>
        </div>
        <div className="auth-panel-side" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ fontWeight: 700, color: '#fff', fontSize: '1.4rem', marginBottom: 4 }}>FaithReach</h2>
          <p style={{ color: '#bfc4ca', marginBottom: 20, fontSize: '1.05rem' }}>Empowering faith-based creators to reach their audience with ease.</p>
          <button
            type="button"
            style={{
              background: '#23262b',
              color: '#2de1fc',
              border: '2px solid #2de1fc',
              borderRadius: 24,
              padding: '12px 40px',
              fontWeight: 700,
              fontSize: '1.1rem',
              cursor: 'pointer',
              marginTop: 8,
              marginBottom: 16,
              transition: 'background 0.2s, color 0.2s',
              width: '100%',
              maxWidth: 220,
            }}
            onClick={() => router.push('/sign-up/clerk')}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}
