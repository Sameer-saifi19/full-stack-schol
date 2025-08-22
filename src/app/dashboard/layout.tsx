import AppSidebar from "@/components/appsidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SidebarProvider >
          <AppSidebar/>
          <main className="w-full">
            <div className="px-4">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
