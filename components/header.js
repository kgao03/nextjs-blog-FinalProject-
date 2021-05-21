import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Container from './container'
import Row from './row'
import ButtonUI from './buttonui'
import NavOverlay from './NavOverlay'
import { useState } from 'react'

export default function Header() {

    const [isMenuVisable, setIsMenuVisable] = useState(false);

    return (
        <header className={styles.header}>
            <Container>
                <Row justifyContentSpaceBetween>
            <Link href="/">
                <a>
                    <Image 
                        src='/images/starbucks-logo.svg'
                        width={100}
                        height={100}
                        alt='Starbucks Logo'
                    />
                </a>
            </Link>
            <ButtonUI 
                icon="menu" 
                clickHandler = {() => {setIsMenuVisable(true)}}
            />
            {
                isMenuVisable && <NavOverlay closeClickHandler={() => {setIsMenuVisable(false)}} />
            }
            </Row>
            </Container>
        </header>
    )
}