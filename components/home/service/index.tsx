import useTranslation from "next-translate/useTranslation"
import styles from '../../../styles/Home.module.scss'
import ServiceCard from "./ServiceCard"

const Service = () => {
    const { t } = useTranslation('home')
    return (
        <div className={styles.service}>
            <p className={styles.title}>{t('service.title')}</p>
            <p className={styles.description}>{t('service.description')}</p>
            <div className={styles.cards}>
                <ServiceCard image={'/images/design.svg'} text={t('service.services.design')} />
                <ServiceCard image={'/images/dev.svg'} text={t('service.services.dev')} />
                <ServiceCard image={'/images/server.svg'} text={t('service.services.server')} />
            </div>
        </div>
    )
}

export default Service