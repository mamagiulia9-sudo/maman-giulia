import {NextRequest, NextResponse} from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const {name, email, language, message} = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({error: 'Missing required fields'}, {status: 400});
  }

  const {error} = await resend.emails.send({
    from: 'MamaGiulia Contact <onboarding@resend.dev>',
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
        <hr style="border: none; border-top: 1px solid #EDE5C0; margin: 16px 0;">
        <p style="font-size: 12px; color: #aaa;">Envoyé depuis mamagiulia.com</p>
      </div>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({error: 'Failed to send email'}, {status: 500});
  }

  return NextResponse.json({success: true});
}
