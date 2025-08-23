import FooterCTA from "./FooterCTA";
import { FooterMenu } from "./FooterMenu";

export default function Footer() {
  return (
    <div className="h-full bg-background text-foreground flex flex-col">
      <FooterCTA />
      <FooterMenu />
    </div>
  );
}
