import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import hero from '../../public/images/hero.png'
import dynamic from 'next/dynamic'

const BaseButton = dynamic(() => import('../BaseButton/BaseButton'))

const Hero = () => {
    const { t } = useTranslation('home')
    return (
        <div id='hero' className={styles.hero}>
            <h1 className={styles.description}>{t('hero.description')}</h1>
            <div className={styles.imgContainer}>
                <Image alt='création des sites web, applications mobile et design' priority src={hero} width={700} height={465} />
                <BaseButton bg="linear" text={t('hero.btn')} width={'381px'} />
            </div>
        </div>
    )
}

export default Hero