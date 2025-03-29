import Link from 'next/link'
import styles from '@styles/navigation.module.scss'
export default function Navigation(){
    return(
        <nav className={styles.nav}>
            <Link href='/'>Home</Link>
            <Link href='/products'>Products</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact-us'>Contact</Link>
            <Link href='/todo-app'>Todo App</Link>
        </nav>
    )
}