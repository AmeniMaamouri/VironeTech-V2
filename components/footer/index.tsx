import useTranslation from 'next-translate/useTranslation'
import styles from './Footer.module.scss'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'

const Footer = () => {
    const { t } = useTranslation('home')
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                    <p>{t('footer')}</p>
                    <div className={styles.socialLinks}>
                        <Link href={'/'}><FaFacebookF /></Link>
                        <Link href={'/'}><BsLinkedin /></Link>
                        <Link href={'/'}><BsInstagram /></Link>
                    </div>
                </div>
        
        </div>
    )
}

export default Footer