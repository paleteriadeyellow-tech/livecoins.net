import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { GiftDemo } from '../components/GiftDemo';
import { GamesGrid } from '../components/GamesGrid';
import { Features } from '../components/Features';
import { AppShowcase } from '../components/AppShowcase';
import { TutorialSection } from '../components/TutorialSection';
import { Pricing } from '../components/Pricing';
import { DownloadSection } from '../components/DownloadSection';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GiftDemo />
        <GamesGrid />
        <Features />
        <AppShowcase />
        <TutorialSection />
        <Pricing />
        <DownloadSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
