import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Board Game Cafe',
  description: 'Board Game Cafe By KIT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <main className='container mx-auto px-4'>
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
