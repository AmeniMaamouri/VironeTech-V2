import useTranslation from 'next-translate/useTranslation'
import { Carousel } from 'react-responsive-carousel'
import styles from '../../../styles/Home.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi';
import TestimonialItem from './TestimonialItem';

const Testimonials = () => {
    const { t } = useTranslation('home')

    const renderArrowPrev = (clickHandler: () => void) => {
        return <HiArrowCircleLeft onClick={clickHandler} />
    }
    const renderArrowNext = (clickHandler: () => void) => {
        return <HiArrowCircleRight className={styles.nextArrow} onClick={clickHandler} />
    }

    return (
        <div className={styles.testimonials}>
            <p className={styles.title}>{t('Testimonial.title')}</p>
            <p className={styles.description}>{t('Testimonial.description')}</p>
            <div className={styles.carouselContainer}>
                <Carousel infiniteLoop renderArrowPrev={renderArrowPrev} renderArrowNext={renderArrowNext} showStatus={false} showIndicators={false} showThumbs={false}>
                    <TestimonialItem name={t('Testimonial.testimonial1.name')} text={t('Testimonial.testimonial1.text')} post={t('Testimonial.testimonial1.post')} />
                    <TestimonialItem name={t('Testimonial.testimonial1.name')} text={t('Testimonial.testimonial1.text')} post={t('Testimonial.testimonial1.post')} />
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonials