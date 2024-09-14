'use client' // client component, not server rendered
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from "next/image";

function NavBar() {
    const path = usePathname(); // hook to check current path

    const navList = [
        {
            id: 1,
            title: 'Home',
            href: '/'
        },
        {
            id: 2,
            title: 'Meal Plan',
            href: '/mealplan'
        },
        {
            id: 3,
            title: 'My Recipes',
            href: '/recipes'
        },
    ]

    return (
        <header className="nav-container">
            <nav className="nav-bar">
                <div className="nav-left">
                    <div className="Logo">
                        <Image src="/images/logo.png" alt="Plan to Plate logo"
                            width={120} height={120} priority
                        />
                    </div>
                    <ul className="nav-title">
                        <li><h2>Plan to Plate</h2></li>
                    </ul>
                </div>
                <ul className="nav-main">
                    {navList.map((item, id) => (
                        <li key={id}>
                            <Link href={item.href} className={path === item.href ? 'active' : null}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="nav-right">
                    <li><Link href="/profile">Profile</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar