import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import react from '../../public/images/react.jpg'
import next from '../../public/images/next.jpg'
import node from '../../public/images/node.jpg'
import nest from '../../public/images/nest.jpg'
import spring from '../../public/images/spring.jpg'
import android from '../../public/images/android.jpg'
import flutter from '../../public/images/flutter.jpg'
import figma from '../../public/images/figma.jpg'
import adobeXd from '../../public/images/adobexd.jpg'
import wordpress from '../../public/images/wordpres.jpg'
import styles from '../../styles/Home.module.scss'

const Technologies = () => {
    const { t } = useTranslation('home')
    return (
        <div className={styles.technologies}>
            <p className={styles.title}>{t('technologies.title')}</p>
            <p className={styles.description}>{t('technologies.description')}</p>
            <div className={styles.listTechnologies}>
            
                    <Image src={react} alt='react js' width={176} height={107} />
                    <Image src={next} alt='next js' width={176} height={107} />
                    <Image src={node} alt='node js' width={176} height={107} />
                    <Image src={nest} alt='nest js' width={176} height={107} />
                    <Image src={spring} alt='spring boot' width={176} height={107} />
             
                    <Image src={android} alt='android kotlin' width={176} height={107} />
                    <Image src={flutter} alt='flutter android ios' width={176} height={107} />
                    <Image src={figma} alt='design figma' width={176} height={107} />
                    <Image src={adobeXd} alt='design adobe xd' width={176} height={107} />
                    <Image src={wordpress} alt='wordpress' width={176} height={107} />
                

            </div>
        </div>
    )
}

export default Technologies