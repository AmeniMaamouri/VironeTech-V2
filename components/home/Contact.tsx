import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import { SubmitHandler, useForm } from "react-hook-form";
import styles from '../../styles/Home.module.scss';

const BaseButton = dynamic(() => import('../BaseButton/BaseButton'))

type Inputs = {
    message: string,
    name: string,
    email: string,
    subject: string,
};

const Contact = () => {
    const { t } = useTranslation('home')

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);



    return (
        <div id='contact' className={styles.contact}>
            <div className={styles.contactContainer}>
                <p className={styles.title}>{t('contact.title')}</p>
                <p className={styles.description}>{t('contact.description')}</p>
                <div className={styles.items}>
                    <div className={styles.form}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className={styles.firstInputsContainer}>
                                <div>
                                    <label htmlFor='name'>{t('contact.form.name.label')}</label>
                                    <input className={errors.name && styles.inputInvalid} id="name" type={'text'} placeholder={t('contact.form.name.placeholder')}  {...register("name", { required: true })} />
                                    {errors.name && <span className={styles.errorInputs}>{t('contact.form.errors.required')}</span>}
                                </div>

                                <div>
                                    <label htmlFor='email'>{t('contact.form.email.label')}</label>
                                    <input id="email" className={errors.email && styles.inputInvalid} type={'text'} placeholder={t('contact.form.email.placeholder')}  {...register("email", { pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, required: true })} />
                                    {errors.email && <span className={styles.errorInputs}>{t('contact.form.errors.email')}</span>}
                                </div>
                            </div>
                            <div style={{ display: 'grid' }}>
                                <label htmlFor='subject'>{t('contact.form.subject.label')}</label>
                                <input id="subject" className={errors.subject && styles.inputInvalid} type={'text'} placeholder={t('contact.form.subject.placeholder')}  {...register("subject", { required: true })} />
                                {errors.subject && <span className={styles.errorInputs}>{t('contact.form.errors.required')}</span>}
                            </div>
                            <div style={{ display: 'grid' }}>
                                <label htmlFor='message'>{t('contact.form.message.label')}</label>
                                <textarea rows={9} className={errors.message && styles.inputInvalid} id="message" placeholder={t('contact.form.subject.placeholder')}  {...register("message", { required: true })} />
                                {errors.message && <span className={styles.errorInputs}>{t('contact.form.errors.required')}</span>}
                            </div>

                            <div className={styles.sendBtn}>
                                <BaseButton type='submit' bg="linear" text={t('contact.form.sendBtn')} width={'100%'} />
                            </div>
                        </form>
                    </div>

                    <div className={styles.map}>
                        <iframe src="https://maps.google.com/maps?q=Cercle%20des%20Bureaux%20Centre%20Urbain%20Nord%201082%20Tunis&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact