import { AssistanceButtons } from "./AssistanceButtons";
import { FooterMenu } from "./FooterMenu";
import { GeographicReach } from "./GeographicReach";

import { ImpactfulHeadline } from "./ImpactfulHeadline";
import { InquiryForm } from "./InquiryForm";

export default function Footer() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16 xl:p-20">
        <div className="flex flex-col justify-center space-y-8">
          <ImpactfulHeadline />
          <InquiryForm />
          <AssistanceButtons />
        </div>

        <GeographicReach />
      </main>
      <FooterMenu />
    </div>
  );
}
