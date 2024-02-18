import { manrope } from '@/styles/font'
import Link from 'next/link'
export default function Header() {
    return (
        <header
            className={`${manrope.className} fixed top-0 z-10 w-full py-4 backdrop-blur-xl`}
        >
            <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 md:px-7.5 lg:px-0">
                <h1 className="text-xl font-bold lg:text-3xl">
                    <a href="/">hee</a>
                </h1>
                <ul className="flex items-center gap-x-13.5 text-sm lg:text-base">
                    <li>
                        <Link href="/list">Works</Link>
                    </li>
                    <li>
                        <Link href="/info">Info</Link>
                    </li>
                    <li>
                        <Link
                            href="https://brunch.co.kr/@dumbo"
                            target="_blank"
                        >
                            Brunch
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
