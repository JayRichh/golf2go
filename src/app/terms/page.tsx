'use client';

import { useState } from 'react';
import { Download, ZoomIn, ZoomOut } from 'lucide-react';

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
          <Container size="xl">
            <div className="mx-auto max-w-3xl py-12 md:py-16 text-center">
              <Text variant="h2" align="center" className="text-primary-foreground">
                Terms and Conditions
              </Text>
              {/* <Text variant="xl" className="mt-6 text-primary-foreground/90">
                Please review our terms and conditions for hiring our mini golf courses
              </Text> */}
            </div>
          </Container>
        </GradientBackground>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-12 md:py-16">
        <Container size="xl">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Controls */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#1c2834] text-white">
              {/* <div className="flex items-center space-x-4">
                <button
                  onClick={() => setScale(prev => Math.max(prev - 10, 50))}
                  className="p-2 rounded-md hover:bg-gray-700 transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <span className="text-sm font-medium select-none">{scale}%</span>
                <button
                  onClick={() => setScale(prev => Math.min(prev + 10, 150))}
                  className="p-2 rounded-md hover:bg-gray-700 transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div> */}
              
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
