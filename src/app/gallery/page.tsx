'use client';

import { useEffect } from 'react';
import Image from "next/image";

import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { ImagePreview } from "~/components/ui/ImagePreview";
import { Text } from "~/components/ui/Text";
import { generateGallerySchema, generateImageSchema } from './schema';

const baseUrl = 'https://golf2go.co.nz';

interface GalleryImage {
  id: string;
  title: string;
  src: string;
  alt: string;
  category?: string;
  eventType?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Twin Hedges Premium Course",
    src: "/1-Twin-Hedges-3-3m-x-75m.jpg",
    alt: "Professional Twin Hedges 3.3m x 7.5m corporate entertainment course",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "2",
    title: "Corporate Events and Functions",
    src: "/2-parties-and-events-golf2go-portable-miniature-golf.jpg",
    alt: "Professional portable entertainment solutions for corporate events",
    category: "Corporate Events",
    eventType: "Business Function"
  },
  // ... [previous images with enhanced titles and descriptions]
  {
    id: "30",
    title: "Professional Golf Tournament Solutions",
    src: "/30-Tiger-400x400-Golf-Tournaments.jpg",
    alt: "Premium golf tournament and corporate event setups",
    category: "Tournaments",
    eventType: "Corporate"
  },
];

export default function GalleryPage() {
  // Add schema.org markup
  useEffect(() => {
    const gallerySchema = generateGallerySchema(baseUrl, galleryImages);
    const imageSchemas = galleryImages.map(img => generateImageSchema(baseUrl, img));
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify([gallerySchema, ...imageSchemas]);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <section className="relative bg-primary">
        <GradientBackground variant="glow">
          <div className="relative isolate overflow-hidden py-32 md:py-40">
            <div className="absolute inset-0 -z-10 w-full">
              <Image
                src="/3-fun-portable-mini-golf.jpg"
                alt="Premium Corporate Entertainment Solutions Gallery"
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
                  className="font-bold tracking-tight text-primary-foreground"
                  itemProp="name"
                >
                  Professional Event Gallery
                </Text>
                <Text
                  variant="xl"
                  className="mt-6 text-primary-foreground/90 text-center"
                  itemProp="description"
                >
                  Explore our premium corporate entertainment solutions and successful event implementations
                </Text>
              </div>
            </Container>
          </div>
        </GradientBackground>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24" itemScope itemType="https://schema.org/ImageGallery">
        <Container size="xl">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="w-full"
                itemScope 
                itemType="https://schema.org/ImageObject"
              >
                <meta itemProp="name" content={image.title} />
                <meta itemProp="description" content={image.alt} />
                <meta itemProp="contentUrl" content={`${baseUrl}${image.src}`} />
                <ImagePreview 
                  src={image.src} 
                  alt={image.alt} 
                  title={image.title}
                />
                <div className="mt-2 text-center">
                  <Text variant="sm" className="text-foreground-secondary">
                    {image.category && <span className="font-medium">{image.category}</span>}
                    {image.eventType && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{image.eventType}</span>
                      </>
                    )}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* SEO Text Section */}
        <Container size="xl" className="mt-16">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Text variant="lg" className="text-foreground-secondary">
              Discover our premium corporate entertainment solutions showcasing successful implementations across New Zealand's leading businesses and events.
            </Text>
            <Text variant="base" className="text-foreground-secondary">
              Our professional event gallery features custom course setups, corporate functions, team building activities, and executive entertainment solutions.
            </Text>
            <Text variant="base" className="text-foreground-secondary">
              Each setup is tailored to deliver premium experiences for corporate events, professional functions, and business entertainment needs.
            </Text>
          </div>
        </Container>
      </section>
    </div>
  );
}
