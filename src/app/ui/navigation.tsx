"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { usePathname } from "next/navigation";

const MedLogo = () => {
  return (
    <Image
      className="rounded-4xl"
      alt="logo"
      src={Logo}
      width={50}
      height={50}
    />
  );
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const menuItems = ["Nosotros", "Servicios", "Contacto"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <MedLogo />
            <p className="font-bold text-stone-900">GenMed</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color={pathname === "/nosotros" ? "success" : "foreground"}
            aria-current="page"
            href="/nosotros"
          >
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={pathname === "/servicios" ? "success" : "foreground"}
            aria-current="page"
            href="/servicios"
          >
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={pathname === "/contacto" ? "success" : "foreground"}
            aria-current="page"
            href="/contacto"
          >
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="/google-calendar"
            variant="solid"
            className="bg-green-500 text-amber-50"
          >
            Agendar Cita
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                pathname === `/${item.toLowerCase()}` ? "success" : "foreground"
              }
              href={`/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden text-green-500"
      />
    </Navbar>
  );
};

export default Navigation;
