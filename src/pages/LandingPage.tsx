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
import { StickyDownload } from '../components/StickyDownload';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
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
      <StickyDownload />
      <Footer />
    </>
  );
}
