'use client';

import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import Image from "next/image";

import { Container } from '~/components/ui/Container';
import { GradientBackground } from '~/components/ui/GradientBackground';
import { Text } from '~/components/ui/Text';
import { generateTermsSchema, generatePdfSchema } from './schema';

const baseUrl = 'https://golf2go.co.nz';
const termsSchema = generateTermsSchema(baseUrl);
const pdfSchema = generatePdfSchema(baseUrl);

export default function Terms() {
  const [scale, setScale] = useState(100);

  // Add schema.org markup
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify([termsSchema, pdfSchema]);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary">
        <GradientBackground variant="glow">
          <div className="relative isolate overflow-hidden py-32 md:py-40">
            <div className="absolute inset-0 -z-10 w-full">
              <Image
                src="/4-portable-miniature-golf.jpg"
                alt="Golf 2 Go Professional Terms and Conditions"
                fill
                className="h-full w-full object-cover opacity-30"
                sizes="100vw"
                priority
              />
            </div>
            <Container size="xl">
              <div className="mx-auto max-w-2xl text-center h-[180px] flex flex-col justify-center">
                <Text 
                  variant="h1" 
                  align="center" 
                  className="text-primary-foreground"
                  itemProp="name"
                >
                  Professional Terms and Conditions
                </Text>
                <Text 
                  variant="xl" 
                  className="mt-6 text-primary-foreground/90"
                  itemProp="description"
                >
                  Comprehensive terms for premium corporate entertainment and event solutions
                </Text>
              </div>
            </Container>
          </div>
        </GradientBackground>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-12 md:py-16" itemScope itemType="https://schema.org/DigitalDocument">
        <meta itemProp="encodingFormat" content="application/pdf" />
        <meta itemProp="inLanguage" content="en-NZ" />
        <Container size="xl">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Controls */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#1c2834] text-white">
              <a
                href="/TERMS AND CONDITIONS OF HIRE 2025-26.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                itemProp="downloadUrl"
              >
                <Download className="w-5 h-5" />
                <span className="text-sm font-medium">Download Professional Terms Document</span>
              </a>
            </div>

            {/* PDF Viewer */}
            <div className="bg-[#2a3541] w-full">
              <iframe
                src="/TERMS AND CONDITIONS OF HIRE 2025-26.pdf"
                className="w-full h-[calc(100vh-300px)] border-0"
                style={{
                  transform: `scale(${scale / 100})`,
                  transformOrigin: 'top center'
                }}
                title="Professional Terms and Conditions Document"
                itemProp="url"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 space-y-4 text-center">
            <Text variant="sm" className="text-foreground-secondary">
              Last Updated: January 2025 • Version: 2025-26
            </Text>
            <Text variant="sm" className="text-foreground-secondary">
              These terms cover our premium corporate entertainment services, event solutions, and professional equipment hire.
            </Text>
            <Text variant="sm" className="text-foreground-secondary">
              For inquiries about our terms or corporate bookings, please <a href="/contact" className="text-primary hover:underline">contact our professional team</a>.
            </Text>
          </div>
        </Container>
      </section>
    </div>
  );
}
