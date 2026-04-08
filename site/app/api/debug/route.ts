import {client} from '@/lib/sanity';
import {NextResponse} from 'next/server';

export async function GET() {
  const data = await client.fetch(
    `*[_type == "resource"] {
      _id, title, type, categories, subcategories,
      coverImage { asset -> { url } },
      file { asset -> { url } }
    }`
  );
  return NextResponse.json(data);
}
