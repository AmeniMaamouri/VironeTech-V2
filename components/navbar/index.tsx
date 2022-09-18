import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import logo from '../../public/images/logo.svg';
import styles from './Navbar.module.scss';

export default function Navbar() {
    const { t } = useTranslation('home')
    const [isPageScrolled, setIsPageScrolled] = useState(false)

    /* on scroll show border bottom to navbar */
    useEffect(() => {
       
        window.addEventListener("scroll", () => {
            if (window.pageYOffset === 0) {
                setIsPageScrolled(false)
            } else {
                setIsPageScrolled(true)
            }
        });

        return () => window.removeEventListener('scroll', () => setIsPageScrolled(false));
    }, [])



    return (
        <div style={isPageScrolled ? { boxShadow: "0 1px 3px rgb(0 0 0 / 10%)" } : undefined} className={styles.navbar}>
            <div className={styles.logo}>
                <Image priority src={logo} width={283} height={68} alt="vironetech" />
            </div>
            <div className={styles.items}>
                <a href='#hero'><p>{t('navbar.home')}</p></a>
                <a href='#testimonials'><p>{t('navbar.opinion')}</p></a>
                <a href='#service'><p>{t('navbar.service')}</p></a>
                <a href='#project'><p>{t('navbar.work')}</p></a>
                <a href='#contact'><p>{t('navbar.contact')}</p></a>
            </div>
        </div>
    )
}