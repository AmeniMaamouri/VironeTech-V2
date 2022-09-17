import useTranslation from "next-translate/useTranslation"
import dynamic from "next/dynamic"
import styles from '../../../styles/Home.module.scss'

const ServiceCard = dynamic(() => import('./ServiceCard'))

const Service = () => {
    const { t } = useTranslation('home')
    return (
        <div id='service' className={styles.service}>
            <p className={styles.title}>{t('service.title')}</p>
            <p className={styles.description}>{t('service.description')}</p>
            <div className={styles.cards}>
                <ServiceCard  image={'/images/design.jpg'} text={t('service.services.design')} />
                <ServiceCard image={'/images/dev.jpg'} text={t('service.services.dev')} />
                <ServiceCard image={'/images/server.jpg'} text={t('service.services.server')} />
            </div>
        </div>
    )
}

export default Service