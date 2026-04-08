import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Windows from '@/components/Windows';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Windows />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
