import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  User2,
  ChevronUp,
  User,
  GraduationCap,
  Users,
  UsersRound,
  Book,
  Megaphone,
  MessageSquare,
  UserCheck,
  UserCheck2,
  CalendarDays,
  BookOpenText,
  BookCheck,
  NotebookPen,
  BookOpenCheck,
  LogOut,
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

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Teachers",
    url: "/teacher",
    icon: GraduationCap,
  },
  {
    title: "Students",
    url: "/student",
    icon: Users,
  },
  {
    title: "Parents",
    url: "/parent",
    icon: UsersRound,
  },
  {
    title: "Classes",
    url: "/classes",
    icon: BookOpenText,
  },
  {
    title: "Lessons",
    url: "/lessions",
    icon: BookCheck,
  },
  {
    title: "Exams",
    url: "/exams",
    icon: BookOpenCheck,
  },
  {
    title: "Assignments",
    url: "/assignments",
    icon: NotebookPen,
  },
  {
    title: "Attendance",
    url: "/Attendance",
    icon: UserCheck,
  },
  {
    title: "Events",
    url: "/Events",
    icon: CalendarDays,
  },
  {
    title: "Messages",
    url: "/Messages",
    icon: MessageSquare,
  },
  {
    title: "Announcement",
    url: "/Announcement",
    icon: Megaphone,
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
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox"}
                </SidebarMenuItem>
              ))}
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
                  {" "}
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
