'use client'

import NavBarSection from '@/components/sections/NavBarSection'
import FloatingSidebar from '@/components/sections/FloatingSidebar'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import MissionSection from '@/components/sections/MissionSection'
import ContentSection from '@/components/sections/ContentSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CasesSection from '@/components/sections/CasesSection'
import PartnersSection from '@/components/sections/PartnersSection'
import CtaSection from '@/components/sections/CtaSection'
import FooterSection from '@/components/sections/FooterSection'

export default function Page() {
  return (
    <>
      <NavBarSection />
      <FloatingSidebar />
      <main>
        <HeroSection />
        <StatsSection />
        <MissionSection />
        <ContentSection />
        <ServicesSection />
        <CasesSection />
        <PartnersSection />
        <CtaSection />
      </main>
      <FooterSection />
    </>
  )
}
