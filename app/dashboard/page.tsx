import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/");
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
            {/* Background pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#bbdefb_1px,transparent_1px),linear-gradient(to_bottom,#bbdefb_1px,transparent_1px)] bg-[size:6rem_4rem]" />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
                    Dashboard
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Add your dashboard content here */}
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Welcome to your Dashboard
                        </h2>
                        <p className="text-gray-600">
                            This is where you can manage your AI agent interactions and settings.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
} 