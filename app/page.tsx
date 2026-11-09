import { VoxEngine } from '@/components/vox/VoxEngine';
import { HeaderNav } from '@/components/vox/HeaderNav';
import { Chapter00Intro } from '@/components/chapters/Chapter00Intro';
import { Chapter01Milestones } from '@/components/chapters/Chapter01Milestones';
import { Chapter02Tooling } from '@/components/chapters/Chapter02Tooling';
import { Chapter02Systems } from '@/components/chapters/Chapter02Systems';
import { Chapter03OpenSource } from '@/components/chapters/Chapter03OpenSource';
import { Chapter04ExitDoors } from '@/components/chapters/Chapter04ExitDoors';
import { DrawerProvider } from '@/components/context/DrawerContext';
import { ModalsContainer } from '@/components/modals/ModalsContainer';

export default function Home() {
  return (
    <DrawerProvider>
      <VoxEngine>
        <HeaderNav />
        <main className="w-full relative">
          {/* Chapter 00: Title / Intro Card */}
          <Chapter00Intro />

          {/* Chapter 01: The Numbers & Milestones */}
          <Chapter01Milestones />

          {/* Chapter 02: Systems & Tooling (Technical Skills & Stacks) */}
          <Chapter02Tooling />

          {/* Chapter 03: Selected Systems (Build) */}
          <Chapter02Systems />

          {/* Chapter 04: Open Source & Code (Learn / Contribute) */}
          <Chapter03OpenSource />

          {/* Chapter 05: Contact & Dispatch */}
          <Chapter04ExitDoors />
        </main>
        {/* Central Modals & Drawers */}
        <ModalsContainer />
      </VoxEngine>
    </DrawerProvider>
  );
}
