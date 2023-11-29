import AdminSideNav from '@/components/admin/AdminSideNav';
import '../globals.css';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className="flex">
        {/* Sidebar */}
        <AdminSideNav></AdminSideNav>

        {/* Main Content */}
        <main className="w-9/12 p-4">
          {/* Your main content goes here */}
          {children}
        </main>
      </body>
    </html>
  );
}
