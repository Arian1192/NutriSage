"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ListItemComponent } from "@/components/ListItem/ListItemComponent";
import {
  ListHealthyItems,
  ListLoginItems,
  WhoWheAre,
} from "@/components/Navbar/NavbarItems";
import { MenuIconComponent } from "../MenuIcon/MenuIconComponent";
const NavbarComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <div className="grid-cols-2 item-baseline p-6 hidden max-sm:block">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-bold text-zinc-700">
            Nutri<span className="font-extralight">Sage</span>
          </h1>
          <MenuIconComponent
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="flex flex-col justify-center items-center md:hidden">
          <div className="fixed top-0 left-0 w-full h-full bg-white text-zinc-700 bg-opacity-100 z-50">
            <div className="flex justify-end mt-8 mr-6">
              <MenuIconComponent
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            </div>
            <div className="mt-64 flex flex-col justify-center items-center ">
              <Accordion type="single" collapsible className="w-[60%]">
                <AccordionItem value="Bienestar">
                  <AccordionTrigger>Bienestar</AccordionTrigger>
                  {ListHealthyItems.map((i) => {
                    return (
                      <AccordionContent key={i.id}>
                        <Link href={i.path}>
                          <p>{i.title}</p>
                        </Link>
                      </AccordionContent>
                    );
                  })}
                </AccordionItem>
                <AccordionItem value="Quienes Somos">
                  <AccordionTrigger>Quienes Somos</AccordionTrigger>
                  {WhoWheAre.map((i) => {
                    return (
                      <AccordionContent key={i.id}>
                        <Link href={i.path}>
                          <p>{i.title}</p>
                        </Link>
                      </AccordionContent>
                    );
                  })}
                </AccordionItem>
                <AccordionItem value="Iniciar Sesión">
                  <AccordionTrigger>Iniciar Sesión</AccordionTrigger>
                  {ListLoginItems.map((i) => {
                    return (
                      <AccordionContent key={i.id}>
                        <Link href={i.path}>
                          <p>{i.title}</p>
                        </Link>
                      </AccordionContent>
                    );
                  })}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      )}

      {/* Menu WebApp */}
      <div className="grid grid-cols-2 item-baseline p-6 max-sm:hidden">
        <div className="w-1/3 flex justify-center">
          <h1 className="text-4xl font-bold text-zinc-700">
            Nutri<span className="font-extralight">Sage</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <NavigationMenu className="text-zinc-700">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Bienestar</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] ">
                    {ListHealthyItems.map((i) => (
                      <Link href={`/${i.path}`} key={i.id}>
                        <NavigationMenuLink>
                          <ListItemComponent key={i.id} {...i} />
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Quienes Somos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] ">
                    {WhoWheAre.map((i) => (
                      <Link href={`/${i.path}`} key={i.id}>
                        <NavigationMenuLink>
                          <ListItemComponent key={i.id} {...i} />
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Entra</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] ">
                    {ListLoginItems.map((i) => (
                      <Link href={`/${i.path}`} key={i.id}>
                        <NavigationMenuLink>
                          <ListItemComponent key={i.id} {...i} />
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;

//TODO: Si el usuario esta logueado, no mostrar este navbar y mostrar el otro.
