import Link from 'next/link'
import Style from '../styles/Nav.module.css'

const Nav = (props) => {
    return (
        <nav className={Style.nav}>
            <ul>
                <li>
                    <Link href="/">
                        <a>home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/photos">
                        <a>photos</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;