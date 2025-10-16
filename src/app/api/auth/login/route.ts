import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser } from '@/lib/auth';
import { LoginCredentials } from '@/types/auth';

export async function POST(request: NextRequest) {
  try {
    const body: LoginCredentials = await request.json();
    
    // Validate required fields
    if (!body.email || !body.password || !body.userType) {
      return NextResponse.json(
        { success: false, message: 'Email, password, and user type are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Validate user type
    const validUserTypes = ['student', 'teacher', 'parent'];
    if (!validUserTypes.includes(body.userType)) {
      return NextResponse.json(
        { success: false, message: 'Invalid user type selected' },
        { status: 400 }
      );
    }

    // Authenticate user
    const result = await authenticateUser(body);

    if (result.success) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(result, { status: 401 });
    }
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
