import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const HARDCODED_EMAIL = 'user@travel.com';
  const HARDCODED_PASSWORD = 'password123';

  if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
    const cookieStore = await cookies();
    const token = Buffer.from(`${email}:${Date.now()}`).toString('base64');
    
    cookieStore.set('auth_token', token, {
      maxAge: 7 * 24 * 60 * 60,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    return Response.json({ success: true });
  }

  return Response.json({ success: false }, { status: 401 });
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token');

  return Response.json({ authenticated: !!token });
}
