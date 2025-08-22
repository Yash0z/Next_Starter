export default function Home() {
  return (
    <main className='flex h-full flex-col justify-between'>
      <div className='flex h-full w-full justify-between text-5xl/loose'>
        <div className='w-full border-r pt-3 pl-10'>
          <h1 className='text-7xl/tight'>Heading-72</h1>
          <h1 className='text-3xl/loose'>Heading-30</h1>
          <h1 className='text-base/loose'>Heading-24</h1>
        </div>
        <div className='w-full'></div>
      </div>
      <div className='h-full bg-secondary pl-3 text-5xl/loose text-secondary-foreground'>
        ready
      </div>
    </main>
  );
}
