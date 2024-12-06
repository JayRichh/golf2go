'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';
import Image from "next/image";

import { Container } from '~/components/ui/Container';
import { GradientBackground } from '~/components/ui/GradientBackground';
import { Text } from '~/components/ui/Text';

export default function Terms() {
  const [scale, setScale] = useState(100);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary">
        <GradientBackground variant="glow">
          <div className="relative isolate overflow-hidden py-32 md:py-40">
            <div className="absolute inset-0 -z-10 w-full">
              <Image
                src="/4-portable-miniature-golf.jpg"
                alt="Golf 2 Go terms"
                fill
                className="h-full w-full object-cover opacity-30"
                sizes="100vw"
                priority
              />
            </div>
            <Container size="xl">
              <div className="mx-auto max-w-2xl text-center py-12">
                <Text variant="h1" align="center" className="text-primary-foreground">
                  Terms and Conditions
                </Text>
                <Text variant="xl" className="mt-6 text-primary-foreground/90">
                  Please review our terms and conditions for hiring our mini golf courses
                </Text>
              </div>
            </Container>
          </div>
        </GradientBackground>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-12 md:py-16">
        <Container size="xl">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Controls */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#1c2834] text-white">
              <a
                href="/TERMS AND CONDITIONS OF HIRE 2025-26.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                <span className="text-sm font-medium">Download PDF</span>
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
                title="Terms and Conditions PDF"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
