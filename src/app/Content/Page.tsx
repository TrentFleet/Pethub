import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const BentoGridd = () => {
    return ( 
        <div>
             <BentoGrid className="max-w-4xl mt-10 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>   
        </div>

     );
}

const Skeleton = ({ imgSrc }: { imgSrc: string }) => (
  imgSrc ? 
    <img src={imgSrc} alt="description" className="h-full w-full object-cover rounded-xl" /> :
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Unleash Your Dog's Potential",
    description: "Discover training tips, health advice, and more.",
    header: <Skeleton imgSrc="/images/1.jpg" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Explore Diverse Dog Breeds",
    description: "Learn about characteristics, care, and temperament.",
     header: <Skeleton imgSrc="/images/2.jpg" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Nurture Your Puppy's Growth",
    description: "Essential guidance for raising a happy and healthy puppy.",
     header: <Skeleton imgSrc="/images/3.jpg" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Care for Your Senior Dog",
    description: "Support your older dog's health and well-being.",
     header: <Skeleton imgSrc="/images/4.jpg" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Connect with Other Dog Lovers",
    description: "Join a community of passionate dog enthusiasts.",
     header: <Skeleton imgSrc="/images/5.jpg" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Adopt a Furry Companion",
    description: "Find your perfect match and give a dog a loving home.",
     header: <Skeleton imgSrc="/images/6.jpg" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
     header: <Skeleton imgSrc="/images/7.jpg" />,
  },
];

 
export default BentoGridd;