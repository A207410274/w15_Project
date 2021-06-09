import style from './Navbar.module.scss'
import Link from 'next/link'


export default function Navbar() {
    

    return (
        <div className={style.navContainer}>
            <nav className={style.nav}>
                <ul className={style.nav__list}>
                    <li className={style.nav__listItem}>
                        <Link href="/process">製作過程</Link>
                    </li>
                    <li className={style.nav__listItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={style.nav__listItem}>
                        <Link href="/project/Search">W16 Search</Link>
                    </li>
                    
                </ul>
            </nav>
       </div>
    )
}
