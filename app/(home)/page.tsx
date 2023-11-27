import Footer from "@/components/shared/Footer";
import Banner from "@/components/home/Banner";
import Navbar from "@/components/shared/Navbar";
import About from "@/components/home/About";
import { Challange } from "@/components/home/Challange";
import Connect from "@/components/home/Connect";
import Blog from "@/components/home/Blog";
import { Feature } from "@/components/home/Feature";
import States from "@/components/home/States";
import Faq from "@/components/home/Faq";



export default function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <div className="my-20">
        <Banner></Banner>
        <About></About>
        <Challange></Challange>
        <Connect></Connect>
        <Blog></Blog>
        <Feature></Feature>
        <States></States>
        <Faq></Faq>
      </div>
      <Footer></Footer>
    </main>
  )
}
