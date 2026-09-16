import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { GamesGrid } from '../components/GamesGrid';
import { AppShowcase } from '../components/AppShowcase';
import { Features } from '../components/Features';
import { TutorialSection } from '../components/TutorialSection';
import { DownloadSection } from '../components/DownloadSection';
import { Pricing } from '../components/Pricing';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DownloadSection />
        <Features />
        <CtaBanner />
        <GamesGrid />
        <AppShowcase />
        <TutorialSection />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
