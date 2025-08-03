import React from "react";
import SectionTitle from "../Layout/Titles/SectionTitle";
import RenderBigIntroImage from "../Layout/Images/RenderBigIntroImage";

export default function ApproachMain() {
  return (
    <div>
      <SectionTitle title="how we set the bar" />
      {/* Hero Image */}
      <RenderBigIntroImage src="/images/approach/bar-1.jpg" />
    </div>
  );
}
