import Link from 'next/link';
import { FloatCubesHero } from '@/components/not-found/cubes';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <header>
        <FloatCubesHero />
      </header>
      <section className='py-12 md:px-8'>
        <h1 className='font-display text-3xl md:text-9xl'>404</h1>
        <p className='font-mono text-5xl/tight text-muted-foreground'>
          The Page you are looking for does not exist or has been moved.
        </p>
        <Button asChild className='mt-5' variant='secondary'>
          <Link href='/'>wanna visit home ?</Link>
        </Button>
      </section>
    </main>
  );
}
