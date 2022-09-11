import useTranslation from "next-translate/useTranslation"
import styles from '../../styles/Home.module.scss'
import BaseButton from "../BaseButton/BaseButton"

const StartProject = () => {
    const { t } = useTranslation('home')
    return (
        <div className={styles.startProject}>
            <div className={styles.container}>
                <p className={styles.title}>{t('startProject.title')}</p>
                <p className={styles.description}>{t('startProject.description')}</p>
                <div className={styles.startProjctBtn}>
                    <BaseButton bg="white" text={t('hero.btn')} width={'381px'} />
                </div>
            </div>
        </div>
    )
}

export default StartProject