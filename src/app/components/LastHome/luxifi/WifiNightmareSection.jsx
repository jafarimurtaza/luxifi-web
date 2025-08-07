"use client";

import { SectionLayout } from "./section-layout";
import { ContentBlock } from "./content-block";
import { WifiVisualization } from "./wifi-visualization";
import Description from "../../Layout/Descriptions/Description";

export function WifiNightmareSection() {
  return (
    <SectionLayout backgroundColor="#000">
      <ContentBlock
        subtitle="THE WIFI NIGHTMARE"
        title="WE GET IT—UNRELIABLE WIFI IS A NIGHTMARE."
      >
        You’ve tried everything
        <ul className="list-disc list-inside">
          <li>Just a router</li>
          <li>Extenders</li>
          <li>Mesh systems</li>
        </ul>
        But the truth is: these solutions only go so far. Spotty coverage, dead
        zones, and buffering aren't just annoying — they interrupt your life.
      </ContentBlock>
      <WifiVisualization type="problem" />
    </SectionLayout>
  );
}
