import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Windows from '@/components/Windows';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import {client} from '@/lib/sanity';
import type {SanityResource} from '@/lib/types';

async function getResources(): Promise<SanityResource[]> {
  try {
    return await client.fetch(
      `*[_type == "resource"] | order(publishedAt desc) {
        _id, title, titleFr, titleZh, titleIt,
        description, descriptionFr, descriptionIt,
        type, videoUrl, categories, subcategories,
        file { asset -> { url } },
        coverImage { asset -> { url } },
        publishedAt
      }`
    );
  } catch (e) {
    console.error('Sanity fetch error:', e);
    return [];
  }
}

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const resources = await getResources();
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Windows locale={locale} resources={resources} />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
