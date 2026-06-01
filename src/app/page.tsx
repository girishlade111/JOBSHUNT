"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ApplyAnywhere } from "@/components/apply-anywhere";
import { ScrutinizedJobs } from "@/components/scrutinized-jobs";
import { DarkTabsSection } from "@/components/dark-tabs-section";
import { InDemandRoles } from "@/components/in-demand-roles";
import { RevolutionaryProfile } from "@/components/revolutionary-profile";
import { CareerBreakthrough } from "@/components/career-breakthrough";
import { CuratedResources } from "@/components/curated-resources";
import { FAQSection } from "@/components/faq-section";
import { FooterSection } from "@/components/footer-section";
import { FloatingWidget } from "@/components/floating-widget";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ApplyAnywhere />
        <ScrutinizedJobs />
        <DarkTabsSection />
        <InDemandRoles />
        <RevolutionaryProfile />
        <CareerBreakthrough />
        <CuratedResources />
        <FAQSection />
      </main>
      <FooterSection />
      <FloatingWidget />
    </div>
  );
}
