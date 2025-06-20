import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-4 space-y-6">
                <div className="text-xl font-bold text-center text-blue-600">Ceylix Global (Pvt) Ltd</div>
                <nav className="flex flex-col space-y-2">
                    <Link href="/dashboard" className="hover:bg-gray-200 p-2 rounded">Dashboard</Link>
                    <Link href="/stock" className="hover:bg-gray-200 p-2 rounded">Stock</Link>
                    <Link href="/orders" className="hover:bg-gray-200 p-2 rounded">Orders</Link>
                    <Link href="/ship" className="hover:bg-gray-200 p-2 rounded">Ship</Link>
                    <Link href="/returns" className="hover:bg-gray-200 p-2 rounded">Returns</Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-6">
                {children}
            </main>
        </div>
    );
}
