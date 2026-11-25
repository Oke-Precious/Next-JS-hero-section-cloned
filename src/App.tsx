/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <HeroSection />
    </div>
  );
}
