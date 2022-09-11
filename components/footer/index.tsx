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
                    <Link href={'https://www.facebook.com/'}><a target='_blank'><FaFacebookF /></a></Link>
                    <Link href={'/'}><a target='_blank'><BsLinkedin /></a></Link>
                    <Link href={'/'}><a target='_blank'><BsInstagram /></a></Link>
                </div>
            </div>

        </div>
    )
}

export default Footer