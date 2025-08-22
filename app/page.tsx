import ThemeSwitcher from '@/components/misc/themeswitcher';
import { Button } from '@/components/ui/button';
export default function Home() {
  return (
    <main className='flex h-full flex-col justify-between'>
      <div className='flex h-full w-full justify-between text-5xl/loose'>
        <div className='mt-3 w-full pl-10'>
          <h1 className='font-display text-7xl/tight'>Heading-72</h1>
          <h1 className='text-3xl/loose'>Heading-30</h1>
          <h1 className='font-mono text-lg/loose'>Heading-18</h1>
          <h1 className='font-mono text-base/loose'>Heading-16</h1>
        </div>
        <div className='w-full'>
          <Button className='' variant='reversed'>
            Button
          </Button>
        </div>
        <div className='pr-5'>
          <ThemeSwitcher />
        </div>
      </div>
      <div className='h-full bg-secondary pl-3 text-5xl/loose text-secondary-foreground'>
        ready
      </div>
    </main>
  );
}
