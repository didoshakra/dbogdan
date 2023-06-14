// import Header from "@/components/Header"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "../components/header/Header"
import HeaderTape from "../components/header/HeaderTape"
import Footer from "../components/header/Footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Нержавійка. Калуш",
  description: "Вироби з нержавйки. Сталь AISI 304",
}

export default function RootLayout({ children }) {
  return (
    // <html lang="en" class="dark">
    <html lang="en" class="light">
      <body className={inter.className}>
        <HeaderTape />
        <Header />
        {/* <main className="px-1 dark:bg-slate-800 min-h-screen max-w-7xl mx-auto xl:px-0 mt-28"> */}
        {/* <main className="px-1 dark:bg-slate-800 min-h-screen max-w-full mx-auto "> */}
        <main className="min-h-screen max-w-7xl mx-auto px- xl:px-0 mt-28">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
