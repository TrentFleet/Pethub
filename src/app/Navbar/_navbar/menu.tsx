import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowDownRightIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Dog Training Guides",
    href: "/docs/primitives/alert-dialog",
    description:
      "Discover training tips, health advice, and more to train your dog effectively.",
  },
  {
    title: "Breed Information",
    href: "/docs/primitives/hover-card",
    description:
      "Learn about various dog breeds, their characteristics, and suitability as pets.",
  },
  {
    title: "Puppy Care Essentials",
    href: "/docs/primitives/progress",
    description:
      "Essential guidance for raising a happy and healthy puppy, from nutrition to socialization.",
  },
  {
    title: "Senior Dog Health",
    href: "/docs/primitives/scroll-area",
    description:
      "Support your senior dog's health and well-being with expert tips.",
  },
  {
    title: "Community Engagement",
    href: "/docs/primitives/tabs",
    description:
      "Connect with fellow dog lovers, share experiences, and seek advice from the community.",
  },
  {
    title: "Adoption Resources",
    href: "/docs/primitives/tooltip",
    description:
      "Find valuable resources and tips for adopting a dog and providing a loving home.",
  },
];

const Menu = () => {
  return (
    <div className="lg:block hidden">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Dog Guide</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Community">
                  A community-driven platform for dog lovers.
                </ListItem>
                <ListItem href="/docs/installation" title="Our Dog Guides">
                  Get started with our easy-to-follow guide.
                </ListItem>
                
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Learn More</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
export default Menu;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
