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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListItemComponent } from "@/components/ListItem/ListItemComponent";
import {
  ListHealthyItems,
  ListLoginItems,
  WhoWheAre,
} from "@/components/Navbar/NavbarItems";
const NavbarComponent = () => {
  return (
    <div className="grid grid-cols-2 item-baseline p-6">
      <div className="w-1/3 flex justify-center">
        <h1 className="text-4xl font-bold text-zinc-700">
          Nutri<span className="font-extralight">Sage</span>
        </h1>
      </div>
      <div className="flex justify-center">
        <NavigationMenu className="text-zinc-700">
          <NavigationMenuList >
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
  );
};

export default NavbarComponent;


//TODO: Si el usuario esta logueado, no mostrar este navbar y mostrar el otro.
