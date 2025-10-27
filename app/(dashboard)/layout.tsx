import BottomNavigation from "@/components/layout/bottom-navigation"
import Image from 'next/image'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 to-stone-100 dark:from-stone-900 dark:to-amber-950">
      {/* Header with Logo */}
      <header className="sticky top-0 z-40 border-b bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center">
            <Image 
              src="/logo.svg" 
              alt="Abundance Flow" 
              width={200} 
              height={60}
              priority
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>
      
      <main className="flex-1 overflow-y-auto pb-20">
        {children}
      </main>
      
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation />
      </div>
    </div>
  )
}