import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getTranslations("dashboard.sidebar");

  const navItems = [
    {
      icon: "/assets/icons/dashboard/ic-home.svg",
      label: t("home"),
      href: "/dashboard/home",
      active: true,
    },
    {
      icon: "/assets/icons/dashboard/ic-product.svg",
      label: t("product"),
      href: "#",
    },
    {
      icon: "/assets/icons/dashboard/ic-sold.svg",
      label: t("sold"),
      href: "#",
    },
    {
      icon: "/assets/icons/dashboard/ic-money.svg",
      label: t("wallet"),
      href: "#",
    },
    {
      icon: "/assets/icons/dashboard/ic-store.svg",
      label: t("store"),
      href: "#",
    },
    {
      icon: "/assets/icons/dashboard/ic-explore.svg",
      label: t("explore"),
      href: "#",
    },
  ];

  const bottomNavItems = [
    {
      icon: "/assets/icons/dashboard/ic-setting.svg",
      label: t("settings"),
      href: "#",
    },
    {
      icon: "/assets/icons/dashboard/ic-help.svg",
      label: t("help"),
      href: "#",
    },
  ];

  return (
    <SidebarProvider
      className="bg-[#F3FDF1]"
      style={
        {
          "--sidebar-width": "280px",
          "--sidebar-background": "#F3FDF1",
          "--sidebar-border": "transparent",
        } as React.CSSProperties
      }
    >
      <Sidebar collapsible="icon" className="border-none">
        <SidebarHeader className="px-8 py-6 mb-2 group-data-[state=collapsed]:px-0 group-data-[state=collapsed]:py-4">
          <Link
            href="/dashboard/home"
            className="flex items-center justify-start group-data-[state=collapsed]:justify-center"
          >
            <Image
              src="/assets/logo.svg"
              alt="Karja Logo"
              width={100}
              height={32}
              className="object-contain block group-data-[state=collapsed]:hidden"
              loading="eager"
            />
            <Image
              src="/assets/half-logo.svg"
              alt="Karja Logo"
              width={32}
              height={32}
              className="object-contain hidden group-data-[state=collapsed]:block"
            />
          </Link>
        </SidebarHeader>

        <SidebarContent className="px-4 group-data-[state=collapsed]:px-2">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {navItems.map((item, idx) => (
                  <SidebarMenuItem key={idx}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.label}
                      className={`h-auto py-3 px-4 rounded-xl text-sm font-medium transition-colors group-data-[state=collapsed]:justify-center group-data-[state=collapsed]:px-0 ${
                        item.active
                          ? "bg-[#D9FF66] text-primary hover:bg-[#D9FF66] hover:text-primary"
                          : "text-primary hover:bg-[#E8F8EA] hover:text-primary"
                      }`}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3"
                      >
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={24}
                          height={24}
                          className="object-contain shrink-0"
                        />
                        <span className="group-data-[state=collapsed]:hidden">
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="px-4 pb-6 group-data-[state=collapsed]:px-2">
          <div className="w-full h-px bg-[#E2E8F0] my-2 max-w-[200px] ml-2 group-data-[state=collapsed]:hidden" />
          <SidebarMenu className="gap-1">
            {bottomNavItems.map((item, idx) => (
              <SidebarMenuItem key={idx}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.label}
                  className="h-auto py-3 px-4 rounded-xl text-sm font-medium text-primary hover:bg-[#E8F8EA] hover:text-primary transition-colors group-data-[state=collapsed]:justify-center group-data-[state=collapsed]:px-0"
                >
                  <Link href={item.href} className="flex items-center gap-3">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={24}
                      height={24}
                      className="object-contain shrink-0"
                    />
                    <span className="group-data-[state=collapsed]:hidden">
                      {item.label}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem className="mt-4">
              <SidebarMenuButton
                tooltip={t("logout")}
                className="h-auto py-3 px-4 rounded-xl text-sm font-medium text-primary hover:bg-[#E8F8EA] hover:text-primary transition-colors group-data-[state=collapsed]:justify-center group-data-[state=collapsed]:px-0"
              >
                <div className="flex items-center gap-3 w-full text-left group-data-[state=collapsed]:justify-center">
                  <Image
                    src="/assets/icons/dashboard/ic-logout.svg"
                    alt={t("logout")}
                    width={24}
                    height={24}
                    className="object-contain shrink-0"
                  />
                  <span className="group-data-[state=collapsed]:hidden">
                    {t("logout")}
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <div className="flex-1 flex flex-col overflow-hidden bg-white rounded-tl-[32px] rounded-bl-[32px] shadow-sm border border-gray-100 my-2 mr-2">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
}
