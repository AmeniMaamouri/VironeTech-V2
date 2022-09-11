import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'

const Project = () => {
    const { t } = useTranslation('home')
    return (
        <div id='project' className={styles.project}>
            <p className={styles.title}>{t('project.title')}</p>
            <p className={styles.description}>{t('project.description')}</p>
            <div className={styles.realease}>
                <div className={styles.projectContainer}>
                    <Image alt='swistore' src={'/images/project1.svg'} width={601} height={338} />
                    <Image alt='asmywill' src={'/images/project2.svg'} width={601} height={338} />
                </div>
                <div className={styles.projectContainer}>
                    <Image alt='floqon' src={'/images/project3.svg'} width={601} height={338} />
                    <Image alt='botrestapp' src={'/images/project4.svg'} width={601} height={338} />
                </div>
                
            </div>

        </div>
    )
}

export default Project