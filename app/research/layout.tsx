import Nav from "@/components/shared/Navbar"
import '../globals.css'
import Footer from "@/components/shared/Footer"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
import Header from '@/components/shared/Header';


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
        <div className='sticky top-14 z-40 bg-white'>
          <ul class="grid grid-flow-col text-center border-b border-gray-200 text-gray-500">    <li>      <a href="#page1" class="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Pilot Training</a>    </li>    <li>      <a href="#page2" class="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Titan maintenance</a>    </li>    <li>      <a href="#page3" class="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Loadout</a>    </li>    <li>      <a href="#page4" class="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Server Browser</a>    </li>    <li>      <a href="#page5" class="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Settings</a>    </li>  </ul>
        </div>
        <div className="relative">
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  )
}
