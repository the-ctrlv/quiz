import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex-center fixed left-0 top-0 z-30 flex h-[60px] w-full items-center justify-center">
      <Image src="/images/logo.png" alt="Vercel Logo" width={134} height={28} className="object-cover" />
    </header>
  )
}
