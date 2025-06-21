import Image from "next/image";
import { Metadata } from 'next';

import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { ImagePreview } from "~/components/ui/ImagePreview";
import { Text } from "~/components/ui/Text";
import { generateGallerySchema, generateImageSchema } from './schema';
import { metadata } from './metadata';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://golf2go.co.nz';

export { metadata };

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
  {
    id: "3",
    title: "Fun Portable Mini Golf",
    src: "/3-fun-portable-mini-golf.jpg",
    alt: "Engaging portable mini golf entertainment setup",
    category: "Entertainment",
    eventType: "Events"
  },
  {
    id: "4",
    title: "Portable Miniature Golf Setup",
    src: "/4-portable-miniature-golf.jpg",
    alt: "Professional portable miniature golf course",
    category: "Course Setup",
    eventType: "Events"
  },
  {
    id: "5",
    title: "Golf2Go Brand",
    src: "/5-cropped-golf2go-logo-1.jpg",
    alt: "Golf2Go professional branding",
    category: "Brand",
    eventType: "Corporate"
  },
  {
    id: "6",
    title: "Auckland Forefront Event",
    src: "/6-Forefront-400x400-Auckland-Forefront.jpg",
    alt: "Professional event setup at Auckland Forefront",
    category: "Events",
    eventType: "Corporate"
  },
  {
    id: "7",
    title: "Portable Mini Golf Experience",
    src: "/7-portable-miniature-golf.jpg",
    alt: "Premium portable mini golf setup",
    category: "Course Setup",
    eventType: "Events"
  },
  {
    id: "8",
    title: "Work Function Entertainment",
    src: "/8-work-function-fun-portable-mini-golf.jpg",
    alt: "Corporate work function mini golf entertainment",
    category: "Corporate Events",
    eventType: "Work Function"
  },
  {
    id: "9",
    title: "Portable Mini Putt",
    src: "/9-portable-mini-putt.jpg",
    alt: "Professional portable mini putt course",
    category: "Course Setup",
    eventType: "Events"
  },
  {
    id: "10",
    title: "Triple Kidney Course",
    src: "/10-Triple-Kidney-3-4m-x-9m.jpg",
    alt: "Triple Kidney premium course 3.4m x 9m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "11",
    title: "Slalom Hump Installation",
    src: "/11-Slalom-hump-install.jpg",
    alt: "Professional slalom hump course installation",
    category: "Course Setup",
    eventType: "Installation"
  },
  {
    id: "12",
    title: "Slalom Course",
    src: "/12-Slalom-2-8m-x-9m.jpg",
    alt: "Professional Slalom course 2.8m x 9m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "13",
    title: "Single Kidney Pipe",
    src: "/13-Single-Kidney-pipe.jpg",
    alt: "Single Kidney pipe course element",
    category: "Course Elements",
    eventType: "Setup"
  },
  {
    id: "14",
    title: "Single Kidney Course",
    src: "/14-Single-Kidney-2-8m-x-9m.jpg",
    alt: "Single Kidney premium course 2.8m x 9m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "15",
    title: "Multi Tunnels Course",
    src: "/15-Multi-tunnels-2-8m-x-9m.jpg",
    alt: "Multi tunnels premium course 2.8m x 9m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "16",
    title: "Holy Bridge Course",
    src: "/16-Holy-Bridge-3-3m-x-75m.jpg",
    alt: "Holy Bridge premium course 3.3m x 7.5m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "17",
    title: "Close-up Course Detail",
    src: "/17-golf2go-portable-miniature-golf-close-up.jpg",
    alt: "Detailed view of portable miniature golf course",
    category: "Course Details",
    eventType: "Setup"
  },
  {
    id: "18",
    title: "His and Hers Course",
    src: "/18-His-and-Hers-2-4m-x-1-5m.jpg",
    alt: "His and Hers premium course 2.4m x 1.5m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "19",
    title: "Bridge over the River Course",
    src: "/19-Bridge-over-the-River-3-3m-x-9m.jpg",
    alt: "Bridge over the River premium course 3.3m x 9m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "20",
    title: "3n1 Course",
    src: "/20-3n1-3-3m-x-75m.jpg",
    alt: "3n1 premium course 3.3m x 7.5m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "21",
    title: "Tri Harder Course",
    src: "/21-Tri-Harder-3-3m-x-75m.jpg",
    alt: "Tri Harder premium course 3.3m x 7.5m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "22",
    title: "The Road Narrows Course",
    src: "/22-The-Road-Narrows-2-8m-x-9m.jpg",
    alt: "The Road Narrows premium course 2.8m x 9m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "23",
    title: "Short Bridge Course",
    src: "/23-Short-Bridge-2-8m-x-9m.jpg",
    alt: "Short Bridge premium course 2.8m x 9m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "24",
    title: "Right Hand Bend Course",
    src: "/24-Right-Hand-Bend-2-4m-x-1-5m.jpg",
    alt: "Right Hand Bend premium course 2.4m x 1.5m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "25",
    title: "Rain Drops Course",
    src: "/25-Rain-Drops-3-3m-x-75m.jpg",
    alt: "Rain Drops premium course 3.3m x 7.5m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "26",
    title: "Mole Hill Course",
    src: "/26-Mole-Hill-3-3m-x-75m.jpg",
    alt: "Mole Hill premium course 3.3m x 7.5m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "27",
    title: "Dart Board Course",
    src: "/27-Dart-Board-3-3m-x-75m.jpg",
    alt: "Dart Board premium course 3.3m x 7.5m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "28",
    title: "Chop Sticks Course",
    src: "/28-Chop-Sticks-3-3m-x-75m.jpg",
    alt: "Chop Sticks premium course 3.3m x 7.5m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
  {
    id: "29",
    title: "Alcapoco Course",
    src: "/29-Alcapoco-3-3m-x-75.jpg",
    alt: "Alcapoco premium course 3.3m x 7.5m",
    category: "Premium Courses",
    eventType: "Corporate"
  },
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
  // Generate schema markup for server-side rendering
  const gallerySchema = generateGallerySchema(baseUrl, galleryImages);
  const imageSchemas = galleryImages.map(img => generateImageSchema(baseUrl, img));

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([gallerySchema, ...imageSchemas])
        }}
      />
      
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
              <div className="mx-auto max-w-2xl text-center min-h-[140px] flex flex-col justify-center py-8">
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
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
                  loading={index < 2 ? "eager" : "lazy"}
                  priority={index < 1}
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
    </>
  );
}
