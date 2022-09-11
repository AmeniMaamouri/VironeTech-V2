import Image from 'next/image'
import styles from './Navbar.module.scss'
import logo from '../../public/images/logo.svg'
import useTranslation from 'next-translate/useTranslation';
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
    const { t } = useTranslation('home')
    return (
        <div className={styles.navbar}>
            <div className={styles.drawerIcon}>
                <HiMenu />
            </div>
            <div className={styles.logo}>
                <Image src={logo} width={283} height={68} alt="vironetech" />
            </div>
            <div className={styles.items}>
                <p>{t('navbar.home')}</p>
                <p>{t('navbar.opinion')}</p>
                <p>{t('navbar.service')}</p>
                <p>{t('navbar.work')}</p>
                <p>{t('navbar.contact')}</p>
            </div>
        </div>
    )
}