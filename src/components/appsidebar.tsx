import {
  Home,
  GraduationCap,
  Users,
  UsersRound,
  BookOpenText,
  BookCheck,
  BookOpenCheck,
  NotebookPen,
  CalendarDaysIcon,
  UserCheck,
  CalendarDays,
  MessageSquare,
  Megaphone,
  LogOut,
  User,
  User2,
  ChevronUp,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";

import Link from "next/link";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { role } from "@/lib/data"; // ✅ import role like in your first example

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    title: "Teachers",
    url: "/teachers",
    icon: GraduationCap,
    visible: ["admin", "teacher"],
  },
  {
    title: "Students",
    url: "/students",
    icon: Users,
    visible: ["admin", "teacher"],
  },
  {
    title: "Parents",
    url: "/parents",
    icon: UsersRound,
    visible: ["admin", "teacher"],
  },
  {
    title: "Subjects",
    url: "/subjects",
    icon: UsersRound,
    visible: ["admin"],
  },
  {
    title: "Classes",
    url: "/classes",
    icon: BookOpenText,
    visible: ["admin", "teacher"],
  },
  {
    title: "Lessons",
    url: "/lessions",
    icon: BookCheck,
    visible: ["admin", "teacher"],
  },
  {
    title: "Exams",
    url: "/exams",
    icon: BookOpenCheck,
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    title: "Assignments",
    url: "/assignments",
    icon: NotebookPen,
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    title: "Results",
    url: "/results",
    icon: CalendarDaysIcon,
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    title: "Attendance",
    url: "/Attendance",
    icon: UserCheck,
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    title: "Events",
    url: "/Events",
    icon: CalendarDays,
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    title: "Messages",
    url: "/Messages",
    icon: MessageSquare,
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    title: "Announcement",
    url: "/Announcement",
    icon: Megaphone,
    visible: ["admin", "teacher", "student", "parent"],
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={32} height={32} />
                <span>Logo</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                item.visible.includes(role) ? ( // ✅ filter by role here
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ) : null
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> John Doe <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href="/admin/dashboard/profile"
                    className="flex items-center gap-2"
                  >
                    <User />
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings /> Settings
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <LogOut /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
