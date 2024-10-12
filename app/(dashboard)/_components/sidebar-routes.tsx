"use client";

  // Make sure to replace this with the correct import path
import {BarChart,Compass,Layout,List} from "lucide-react"   // Make sure to replace this with the correct import path
import {SidebarItem} from "./sidebar-item"    // Import your SidebarItem component
import {usePathname} from "next/navigation"


const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    },
];

const teacherRoutes =[

    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses",
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics",
    },

]


export const SidebarRoutes = () => {
    const pathname = usePathname();
    const isTeacherPage =pathname?.includes("/teacher");
    const routes = isTeacherPage ? teacherRoutes :guestRoutes ;   guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}      // Corrected key placement
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
};
