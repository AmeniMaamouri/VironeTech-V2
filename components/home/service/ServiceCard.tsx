import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import styles from '../../../styles/Home.module.scss'
const ServiceCard = ({ image, text }: { image: string, text: string }) => {
    const { t } = useTranslation('home')
    return (
        <div className={styles.serviceCard}>
            <Image alt={text} src={image} width={67} height={63} />
            <p className={styles.descrip}>{text}</p>
        </div>
    )
}

export default ServiceCard