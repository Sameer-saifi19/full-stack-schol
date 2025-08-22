"use client";

import {
  LogOut,
  Megaphone,
  Menu,
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "./ui/sidebar";
import { Input } from "./ui/input";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="p-4 mb-8 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <SidebarTrigger className="size-10" />
        <Input placeholder="Search" className="w-60 sm:w-72 sm:block"></Input>
      </div>
      <div className="hidden md:flex items-center gap-6">
        {/* Theme toggle */}
        <Megaphone className="h-5 w-5 cursor-pointer" />
        <MessageCircle className="h-5 w-5 cursor-pointer" />

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

      <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Megaphone className="mr-2 h-4 w-4" /> Notifications
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageCircle className="mr-2 h-4 w-4" /> Messages
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                🌞 Light Mode
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                🌙 Dark Mode
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                🖥 System
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" /> Sameer Saifi (Student)
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

    </nav>
  );
}
