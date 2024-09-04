'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, User, LogIn, Info, Book, Users, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Start() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-gray-100">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-blue-950/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
            DHS ARC
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="text-gray-300 hover:text-white text-lg flex items-center">
              <Info className="mr-2 h-5 w-5" />
              About Us
            </Link>
            <Link href="/rules" className="text-gray-300 hover:text-white text-lg flex items-center">
              <Book className="mr-2 h-5 w-5" />
              Rules
            </Link>
            <Link href="/staff" className="text-gray-300 hover:text-white text-lg flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Staff
            </Link>
            <Link href="/tutoring" className="text-gray-300 hover:text-white text-lg flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Tutoring
            </Link>
            <Link href="/hours" className="text-gray-300 hover:text-white text-lg flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Hours
            </Link>
          </nav>
          <div className="hidden md:flex space-x-2">
            <Button variant="outline" size="sm" className="text-gray-300 border-gray-600 hover:bg-blue-800">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600">
              <User className="mr-2 h-4 w-4" />
              Sign Up
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-blue-950/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link href="/about" className="text-gray-300 hover:text-white text-xl flex items-center">
                <Info className="mr-2 h-5 w-5" />
                About Us
              </Link>
              <Link href="/rules" className="text-gray-300 hover:text-white text-xl flex items-center">
                <Book className="mr-2 h-5 w-5" />
                Rules
              </Link>
              <Link href="/staff" className="text-gray-300 hover:text-white text-xl flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Staff
              </Link>
              <Link href="/tutoring" className="text-gray-300 hover:text-white text-xl flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Tutoring
              </Link>
              <Link href="/hours" className="text-gray-300 hover:text-white text-xl flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Hours
              </Link>
              <Button variant="outline" size="sm" className="text-gray-300 border-gray-600 hover:bg-blue-800">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600">
                <User className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
            </div>
          </nav>
        )}
      </header>
      <main className="pt-16">
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center ">
  {/*<div className="absolute inset-0">
    <Image
      src="/placeholder.svg?height=400&width=400"
      alt="Dublin High School ARC"
      fill
      sizes="105vw"
      style={{
        objectFit: 'cover',
      }}
      className="z-0"
    />
  </div>*/}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 to-blue-900/30 z-10"></div>
  <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
      Welcome to The Dublin High School ARC
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 mt-12">Empowering Students, Fostering Excellence</p>
    <Button size="lg" className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-lg">
      Explore Our Resources
    </Button>
  </div>
</section>
        <section className="bg-blue-900/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">About the ARC</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg">
                  The Academic Resource Center (ARC) at Dublin High School is a beacon of support and excellence in our educational community. Established with the vision of empowering every student to reach their full academic potential, the ARC serves as a dynamic hub for learning, collaboration, and personal growth.
                </p>
                <p className="text-lg">
                  Our mission is to provide a nurturing and inclusive environment where students can access comprehensive resources, receive personalized assistance, and develop essential skills for academic success and lifelong learning.
                </p>
                <p className="text-lg">
                  At the ARC, we offer a wide array of services tailored to meet the diverse needs of our student body. From one-on-one tutoring sessions with experienced educators to collaborative study groups facilitated by peer mentors, we ensure that support is available in various formats to accommodate different learning styles and preferences.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Image src="/placeholder.svg?height=300&width=300" alt="ARC Study Area" width={300} height={300} className="rounded-lg shadow-lg" />
                <Image src="/placeholder.svg?height=300&width=300" alt="ARC Tutoring Session" width={300} height={300} className="rounded-lg shadow-lg" />
                <Image src="/placeholder.svg?height=300&width=300" alt="ARC Resources" width={300} height={300} className="rounded-lg shadow-lg" />
                <Image src="/placeholder.svg?height=300&width=300" alt="ARC Technology" width={300} height={300} className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Our Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-800/30 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-red-400">Personalized Support</h3>
                <p className="text-lg">We recognize that each students journey is unique. Our dedicated team of educators and mentors is committed to providing individualized support that addresses specific academic challenges and goals.</p>
              </div>
              <div className="bg-blue-800/30 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-red-400">Innovative Resources</h3>
                <p className="text-lg">The ARC is equipped with cutting-edge technology and a vast array of learning materials. From interactive software to an extensive library of textbooks and reference materials, we ensure students have access to the tools they need to succeed.</p>
              </div>
              <div className="bg-blue-800/30 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-red-400">Collaborative Environment</h3>
                <p className="text-lg">We foster a community of learners where students can engage in group study sessions, peer tutoring, and academic discussions. This collaborative approach not only enhances understanding but also builds valuable communication and teamwork skills.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="bg-blue-950/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Ask a Question</h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <Input type="text" placeholder="Your Name" className="bg-blue-900/50 border-blue-800 text-white placeholder-gray-400" />
            <Input type="email" placeholder="Your Email" className="bg-blue-900/50 border-blue-800 text-white placeholder-gray-400" />
            <Textarea placeholder="Your Question" className="bg-blue-900/50 border-blue-800 text-white placeholder-gray-400" rows={4} />
            <Button type="submit" className="w-full bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600">
              Submit Question
            </Button>
          </form>
        </div>
      </section>
      <footer className="bg-blue-950 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Dublin High School ARC</h3>
              <p className="text-gray-400">Empowering students to achieve academic excellence and personal growth.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-red-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/rules" className="text-gray-400 hover:text-white">Rules</Link></li>
                <li><Link href="/staff" className="text-gray-400 hover:text-white">Staff</Link></li>
                <li><Link href="/tutoring" className="text-gray-400 hover:text-white">Tutoring</Link></li>
                <li><Link href="/hours" className="text-gray-400 hover:text-white">Hours</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-red-400">Contact Us</h4>
              <p className="text-gray-400">123 School Street</p>
              <p className="text-gray-400">Dublin, CA 94568</p>
              <p className="text-gray-400">Phone: (925) 555-0123</p>
              <p className="text-gray-400">Email: arc@dublinusd.org</p>
            </div>
          </div>
          
          </div>
          </footer>
        </div>
      
    
  )
}