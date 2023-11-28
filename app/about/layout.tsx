import Nav from "@/components/shared/Navbar"
import '../globals.css';
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav></Nav>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
