import {Navbar} from '@/components/Navbar';
import {HeroSection} from '@/components/HeroSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <HeroSection />
    </div>
  );
}
