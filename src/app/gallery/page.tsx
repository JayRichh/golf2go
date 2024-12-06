import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { ImagePreview } from "~/components/ui/ImagePreview";
import { Text } from "~/components/ui/Text";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gallery",
    description:
      "View our portable mini golf courses in action at various events and locations across New Zealand.",
  };
}

interface GalleryImage {
  id: string;
  title: string;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Twin Hedges",
    src: "/1-Twin-Hedges-3-3m-x-75m.jpg",
    alt: "Twin Hedges 3.3m x 7.5m mini golf course",
  },
  {
    id: "2",
    title: "Parties and Events",
    src: "/2-parties-and-events-golf2go-portable-miniature-golf.jpg",
    alt: "Golf2Go portable miniature golf for parties and events",
  },
  {
    id: "3",
    title: "Fun Portable Mini Golf",
    src: "/3-fun-portable-mini-golf.jpg",
    alt: "Fun portable mini golf setup",
  },
  {
    id: "4",
    title: "Portable Miniature Golf",
    src: "/4-portable-miniature-golf.jpg",
    alt: "Portable miniature golf course",
  },
  {
    id: "5",
    title: "Golf2Go Logo",
    src: "/5-cropped-golf2go-logo-1.jpg",
    alt: "Golf2Go logo",
  },
  {
    id: "6",
    title: "Forefront Auckland",
    src: "/6-Forefront-400x400-Auckland-Forefront.jpg",
    alt: "Forefront Auckland event",
  },
  {
    id: "7",
    title: "Portable Miniature Golf Setup",
    src: "/7-portable-miniature-golf.jpg",
    alt: "Portable miniature golf course setup",
  },
  {
    id: "8",
    title: "Work Function Fun",
    src: "/8-work-function-fun-portable-mini-golf.jpg",
    alt: "Work function with portable mini golf",
  },
  {
    id: "9",
    title: "Portable Mini Putt",
    src: "/9-portable-mini-putt.jpg",
    alt: "Portable mini putt course",
  },
  {
    id: "10",
    title: "Triple Kidney",
    src: "/10-Triple-Kidney-3-4m-x-9m.jpg",
    alt: "Triple Kidney 3.4m x 9m course",
  },
  {
    id: "11",
    title: "Slalom Hump Install",
    src: "/11-Slalom-hump-install.jpg",
    alt: "Slalom hump installation",
  },
  {
    id: "12",
    title: "Slalom Course",
    src: "/12-Slalom-2-8m-x-9m.jpg",
    alt: "Slalom 2.8m x 9m course",
  },
  {
    id: "13",
    title: "Single Kidney Pipe",
    src: "/13-Single-Kidney-pipe.jpg",
    alt: "Single Kidney pipe feature",
  },
  {
    id: "14",
    title: "Single Kidney",
    src: "/14-Single-Kidney-2-8m-x-9m.jpg",
    alt: "Single Kidney 2.8m x 9m course",
  },
  {
    id: "15",
    title: "Multi Tunnels",
    src: "/15-Multi-tunnels-2-8m-x-9m.jpg",
    alt: "Multi tunnels 2.8m x 9m course",
  },
  {
    id: "16",
    title: "Holy Bridge",
    src: "/16-Holy-Bridge-3-3m-x-75m.jpg",
    alt: "Holy Bridge 3.3m x 7.5m course",
  },
  {
    id: "17",
    title: "Close Up Shot",
    src: "/17-golf2go-portable-miniature-golf-close-up.jpg",
    alt: "Golf2Go portable miniature golf close up",
  },
  {
    id: "18",
    title: "His and Hers",
    src: "/18-His-and-Hers-2-4m-x-1-5m.jpg",
    alt: "His and Hers 2.4m x 1.5m course",
  },
  {
    id: "19",
    title: "Bridge over the River",
    src: "/19-Bridge-over-the-River-3-3m-x-9m.jpg",
    alt: "Bridge over the River 3.3m x 9m course",
  },
  {
    id: "20",
    title: "3n1 Course",
    src: "/20-3n1-3-3m-x-75m.jpg",
    alt: "3n1 3.3m x 7.5m course",
  },
  {
    id: "21",
    title: "Tri Harder",
    src: "/21-Tri-Harder-3-3m-x-75m.jpg",
    alt: "Tri Harder 3.3m x 7.5m course",
  },
  {
    id: "22",
    title: "The Road Narrows",
    src: "/22-The-Road-Narrows-2-8m-x-9m.jpg",
    alt: "The Road Narrows 2.8m x 9m course",
  },
  {
    id: "23",
    title: "Short Bridge",
    src: "/23-Short-Bridge-2-8m-x-9m.jpg",
    alt: "Short Bridge 2.8m x 9m course",
  },
  {
    id: "24",
    title: "Right Hand Bend",
    src: "/24-Right-Hand-Bend-2-4m-x-1-5m.jpg",
    alt: "Right Hand Bend 2.4m x 1.5m course",
  },
  {
    id: "25",
    title: "Rain Drops",
    src: "/25-Rain-Drops-3-3m-x-75m.jpg",
    alt: "Rain Drops 3.3m x 7.5m course",
  },
  {
    id: "26",
    title: "Mole Hill",
    src: "/26-Mole-Hill-3-3m-x-75m.jpg",
    alt: "Mole Hill 3.3m x 7.5m course",
  },
  {
    id: "27",
    title: "Dart Board",
    src: "/27-Dart-Board-3-3m-x-75m.jpg",
    alt: "Dart Board 3.3m x 7.5m course",
  },
  {
    id: "28",
    title: "Chop Sticks",
    src: "/28-Chop-Sticks-3-3m-x-75m.jpg",
    alt: "Chop Sticks 3.3m x 7.5m course",
  },
  {
    id: "29",
    title: "Alcapoco",
    src: "/29-Alcapoco-3-3m-x-75.jpg",
    alt: "Alcapoco 3.3m x 7.5m course",
  },
  {
    id: "30",
    title: "Golf Tournaments",
    src: "/30-Tiger-400x400-Golf-Tournaments.jpg",
    alt: "Golf Tournaments setup",
  },
];

export default function GalleryPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <section className="relative bg-primary">
        <GradientBackground variant="glow">
          <div className="relative isolate overflow-hidden py-32 md:py-40">
            <div className="absolute inset-0 -z-10 w-full">
              <Image
                src="/8-work-function-fun-portable-mini-golf.jpg"
                alt="Golf 2 Go gallery"
                fill
                className="h-full w-full object-cover opacity-30"
                sizes="100vw"
                priority
              />
            </div>
            <Container size="xl">
              <div className="mx-auto max-w-2xl text-center py-12">
                <Text
                  variant="h1"
                  align="center"
                  className="font-bold tracking-tight text-primary-foreground"
                >
                  Gallery
                </Text>
                <Text
                  variant="xl"
                  className="mx-auto mt-6 max-w-2xl text-primary-foreground/90 text-center"
                >
                  See our portable mini golf courses in action
                </Text>
              </div>
            </Container>
          </div>
        </GradientBackground>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <Container size="xl">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div key={image.id} className="w-full">
                <ImagePreview src={image.src} alt={image.alt} title={image.title} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
