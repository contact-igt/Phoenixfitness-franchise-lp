import type { Metadata } from 'next'
import Script from 'next/script'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import {
  FranchiseBanner,
  FranchiseProof,
  FranchiseOpportunity,
  FranchiseBenefits,
  FranchiseExperience,
  FranchiseDifference,
  FranchiseSupport,
  FranchisePartnerProfile,
  FranchiseLocation,
  FranchiseJourney,
  FranchiseLegacy,
  FranchiseFinalCta,
} from '@/components/sections/franchise/FranchiseSections'
import FranchiseForm from '@/components/sections/franchise/FranchiseForm'
import FranchiseFAQ from '@/components/sections/franchise/FranchiseFAQ'

const metaPixelId = '148013046383605'

export const metadata: Metadata = {
  title: 'Phoenix Fitness Franchise | Become a Franchise Partner',
  description:
    'Explore franchise partnership opportunities with Phoenix Fitness. Tell us your city, preferred location and business plans to start a conversation with our franchise team.',
}

export default function FranchisePage() {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s) {
          if (f.fbq) return;
          n = f.fbq = function() {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = true;
          n.version = '2.0';
          n.queue = [];
          t = b.createElement(e);
          t.async = true;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${metaPixelId}');
        fbq('track', 'PageView');
      `}</Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          height={1}
          width={1}
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
      <Navbar />
      <main>
        <FranchiseBanner />
        <FranchiseProof />
        <FranchiseOpportunity />
        <FranchiseBenefits />
        <FranchiseExperience />
        <FranchiseDifference />
        <FranchiseSupport />
        <FranchisePartnerProfile />
        <FranchiseLocation />
        <FranchiseJourney />
        <FranchiseLegacy />
        <FranchiseForm />
        <FranchiseFAQ />
        <FranchiseFinalCta />
      </main>
      <Footer />
    </>
  )
}
