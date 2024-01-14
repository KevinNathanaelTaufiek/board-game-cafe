import TabelInformation from '@/components/template/TabelInformation'
import { ModeToggle } from '@/components/ui/ModeToggle'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <div>
      <header className='py-4 flex justify-between items-center'>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          🕹️ Board Game Cafe 🎮
        </h3>
        <ModeToggle />
      </header>
      <Separator />
      <section className='m-8'>
        <TabelInformation />
      </section>
    </div>
  )
}
