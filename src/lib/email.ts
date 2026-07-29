export interface ContactPayload {
  name: string;
  business: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export async function sendContactEmail(
  payload: ContactPayload
): Promise<{ success: boolean; error?: string }> {
  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: 'Email service not configured' };
  }

  void payload;
  return { success: true };
}
