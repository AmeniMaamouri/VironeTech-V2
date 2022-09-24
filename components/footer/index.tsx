import useTranslation from 'next-translate/useTranslation'
import { FaPhoneAlt } from 'react-icons/fa'
import styles from './Footer.module.scss'
import { MdEmail } from "react-icons/md";

const Footer = () => {
    const { t } = useTranslation('home')
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <p>{t('footer')}</p>
                <div className={styles.mailAndPhone}>
                    <div>
                        <FaPhoneAlt />
                        <p>+216 58 665 401</p>
                    </div>
                    <div>
                        <MdEmail />
                        <p>support@vironetech.com</p>
                    </div>
                  
                </div>
            </div>

        </div>
    )
}

export default Footer