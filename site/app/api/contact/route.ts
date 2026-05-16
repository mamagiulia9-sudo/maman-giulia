import {NextRequest, NextResponse} from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const {name, email, language, message} = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({error: 'Missing required fields'}, {status: 400});
    }

    console.log('Sending email via Resend, key present:', !!process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['mamagiulia9@gmail.com'],
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2D2825;">
          <h2 style="color: #78B8B5; font-weight: normal;">Nouveau message via MamaGiulia</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Nom</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #78B8B5;">${email}</a></td></tr>
            ${language ? `<tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Langue</td><td style="padding: 8px 0;">${language}</td></tr>` : ''}
          </table>
          <hr style="border: none; border-top: 1px solid #EDE5C0; margin: 16px 0;">
          <p style="font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    console.log('Resend result:', JSON.stringify(result));

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json({error: result.error.message}, {status: 500});
    }

    return NextResponse.json({success: true, id: result.data?.id});
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({error: 'Server error'}, {status: 500});
  }
}
