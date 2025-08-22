"use client";

import {
  LogOut,
  Megaphone,
  MessageCircle,
  Moon,
  Search,
  Settings,
  Sun,
  User,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "./ui/sidebar";
import Link from "next/link";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Image from "next/image";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="p-4 mb-8 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <SidebarTrigger className="size-10" />
        <Input placeholder="Search" className="w-72"></Input>
      </div>
      <div className="flex items-center gap-6">
        {/* Theme toggle */}

        <div>
          <Megaphone className="h-5 w-5 cursor-pointer" />
        </div>
        <div>
          <MessageCircle className="h-5 w-5 cursor-pointer" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex flex-col items-end">
          <span className="text-xs leading-3 font-medium ">Sameer Saifi</span>
          <span className="text-[12px] text-gray-400">Student</span>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
