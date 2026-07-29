import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import { isValidEmail, isRequired } from '@/utils/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, business, email, phone, service, message } = body as {
      name?: string;
      business?: string;
      email?: string;
      phone?: string;
      service?: string;
      message?: string;
    };

    if (!isRequired(name ?? '') || !isRequired(business ?? '') || !isRequired(message ?? '')) {
      return NextResponse.json(
        { error: 'Name, business, and message are required.' },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const result = await sendContactEmail({
      name: name!,
      business: business!,
      email,
      phone,
      service,
      message: message!,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error ?? 'Something went wrong while sending your message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong while sending your message. Please try again.' },
      { status: 500 }
    );
  }
}
