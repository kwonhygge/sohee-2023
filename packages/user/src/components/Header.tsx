import { manrope } from '@/styles/font'
export default function Header() {
    return (
        <header className={`${manrope.className} absolute top-7.5 w-full`}>
            <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 md:px-7.5 lg:px-0">
                <h1 className="text-xl font-bold lg:text-3xl">
                    <a href="/">hee</a>
                </h1>
                <ul className="flex items-center gap-x-13.5 text-sm lg:text-base">
                    <li>
                        <a href="/list">Works</a>
                    </li>
                    <li>
                        <a href="/info">Info</a>
                    </li>
                    <li>
                        <a href="/brunch">Brunch</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
