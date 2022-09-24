import useTranslation from "next-translate/useTranslation"
import dynamic from "next/dynamic"
import styles from '../../styles/Home.module.scss'

const BaseButton = dynamic(() => import('../BaseButton/BaseButton'))

const StartProject = () => {
    const { t } = useTranslation('home')
    return (
        <div className={styles.startProject}>
            <div className={styles.container}>
                <p className={styles.title}>{t('startProject.title')}</p>
                <p className={styles.description}>{t('startProject.description')}</p>
                
                <div style={{maxWidth:'360px', margin:"auto", marginTop:'40px'}} className={styles.startProjctBtn}>
                <a  href='#contact'> <BaseButton bg="white" text={t('hero.btn')} width={'381px'} /></a>
                </div>
            </div>
        </div>
    )
}

export default StartProject