import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.USER_SERVICE_URL || 'http://localhost:3002';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  try {
    const backendRes = await fetch(`${BACKEND_URL}/user/me`, {
      headers: { Authorization: authHeader },
    });
    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  } catch {
    return NextResponse.json({ error: 'User service unavailable' }, { status: 503 });
  }
}

export async function PUT(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  try {
    const body = await req.json();
    const backendRes = await fetch(`${BACKEND_URL}/user/me`, {
      method: 'PUT',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  } catch {
    return NextResponse.json({ error: 'User service unavailable' }, { status: 503 });
  }
}
