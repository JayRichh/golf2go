import { Download } from 'lucide-react';
import Image from "next/image";

import { Container } from '~/components/ui/Container';
import { GradientBackground } from '~/components/ui/GradientBackground';
import { Text } from '~/components/ui/Text';
import { generateTermsSchema, generatePdfSchema } from './schema';

export { generateMetadata } from './metadata';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://golf2go.co.nz';

export default function Terms() {
  const termsSchema = generateTermsSchema(baseUrl);
  const pdfSchema = generatePdfSchema(baseUrl);

  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([termsSchema, pdfSchema]),
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-primary">
        <GradientBackground variant="glow">
          <div className="relative isolate overflow-hidden py-32 md:py-40">
            <div className="absolute inset-0 -z-10 w-full">
              <Image
                src="/4-portable-miniature-golf.jpg"
                alt=""
                fill
                className="h-full w-full object-cover opacity-30"
                sizes="100vw"
                priority
              />
            </div>
            <Container size="xl">
              <div className="mx-auto max-w-2xl text-center min-h-[140px] flex flex-col justify-center py-8">
                <Text
                  variant="h1"
                  align="center"
                  className="text-primary-foreground"
                  itemProp="name"
                >
                  Terms and Conditions
                </Text>
                <Text
                  variant="xl"
                  className="mt-6 text-primary-foreground"
                  itemProp="description"
                >
                  Terms for portable mini golf and mini putt hire
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
                href="/TERMS%20AND%20CONDITIONS%20OF%20HIRE%202025-26.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                itemProp="downloadUrl"
              >
                <Download className="w-5 h-5" />
                <span className="text-sm font-medium">Download Terms Document</span>
              </a>
            </div>

            {/* PDF Viewer */}
            <div className="bg-[#2a3541] w-full">
              <iframe
                src="/TERMS%20AND%20CONDITIONS%20OF%20HIRE%202025-26.pdf"
                className="w-full h-[calc(100vh-300px)] border-0"
                title="Golf 2 Go Terms and Conditions of Hire"
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
              These terms cover our portable mini golf and mini putt hire, delivery, setup and
              equipment.
            </Text>
            <Text variant="sm" className="text-foreground-secondary">
              For questions about our terms or to make a booking, please{" "}
              <a href="/book" className="text-primary hover:underline">
                get a hire quote
              </a>
              .
            </Text>
          </div>
        </Container>
      </section>
    </div>
  );
}
