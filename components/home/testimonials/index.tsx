import useTranslation from 'next-translate/useTranslation'
import { Carousel } from 'react-responsive-carousel'
import styles from '../../../styles/Home.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi';
import dynamic from 'next/dynamic';

const TestimonialItem = dynamic(() => import('./TestimonialItem'))

const Testimonials = () => {
    const { t } = useTranslation('home')

    const renderArrowPrev = (clickHandler: () => void) => {
        return <HiArrowCircleLeft onClick={clickHandler} />
    }
    const renderArrowNext = (clickHandler: () => void) => {
        return <HiArrowCircleRight className={styles.nextArrow} onClick={clickHandler} />
    }

    return (
        <div id='testimonials' className={styles.testimonials}>
            <p className={styles.title}>{t('Testimonial.title')}</p>
            <p className={styles.description}>{t('Testimonial.description')}</p>
            <div className={styles.carouselContainer}>
                <Carousel infiniteLoop autoPlay renderArrowPrev={renderArrowPrev} renderArrowNext={renderArrowNext} showStatus={false} showIndicators={false} showThumbs={false}>
                    <TestimonialItem name={t('Testimonial.testimonial1.name')} text={t('Testimonial.testimonial1.text')} post={t('Testimonial.testimonial1.post')} />
                    <TestimonialItem name={t('Testimonial.testimonial2.name')} text={t('Testimonial.testimonial2.text')} post={t('Testimonial.testimonial2.post')} />
                    <TestimonialItem name={t('Testimonial.testimonial3.name')} text={t('Testimonial.testimonial3.text')} post={t('Testimonial.testimonial3.post')} />
                    <TestimonialItem name={t('Testimonial.testimonial4.name')} text={t('Testimonial.testimonial4.text')} post={t('Testimonial.testimonial4.post')} />
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonials