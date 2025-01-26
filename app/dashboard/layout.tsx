import { UserButton } from "@clerk/nextjs";
import { Authenticated } from "convex/react";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Authenticated>
                <h1>Sidebar</h1>
                {/* Sidebar */}
            </Authenticated>
            {children}
        </div>
    );
} 