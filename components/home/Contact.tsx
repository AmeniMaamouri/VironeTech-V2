import axios from 'axios';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../styles/Home.module.scss';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const BaseButton = dynamic(() => import('../BaseButton/BaseButton'))

type Inputs = {
    contentMessage: string,
    firstAndLastName: string,
    email: string,
    subject: string,
    phone: string
};

const Contact = () => {
    const { t } = useTranslation('home')
    const [loading, setLoading] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors }, reset, setValue, control } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (contactInformations) => {
        setLoading(true)
        try {
            await axios('https://api.vironetech.com/api/v1/send_mail', {
                method: 'POST',
                data: contactInformations
            })
            reset()
            setValue('contentMessage', "")
            setLoading(false)
            toast.success(t('contact.success'))

        } catch (error: unknown) {
            setLoading(false)
            toast.error(t('contact.failed'))
        }

    }

    return (
        <div id='contact' className={styles.contact}>
            <div className={styles.contactContainer}>
                <p className={styles.title}>{t('contact.title')}</p>
                <p className={styles.description}>{t('contact.description')}</p>
                <div className={styles.items}>
                    <div className={styles.form}>
                        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>

                            <div className={styles.firstInputsContainer}>
                                <div>
                                    <label htmlFor='name'>{t('contact.form.name.label')}</label>
                                    <input className={errors.firstAndLastName && styles.inputInvalid} id="name" type={'text'} placeholder={t('contact.form.name.placeholder')}  {...register("firstAndLastName", { required: true, validate: (value) => { return !!value.trim() }})} />
                                    {errors.firstAndLastName && <span className={styles.errorInputs}>{t('contact.form.errors.required')}</span>}
                                </div>

                                <div>
                                    <label htmlFor='email'>{t('contact.form.email.label')}</label>
                                    <input id="email" className={errors.email && styles.inputInvalid} type={'text'} placeholder={t('contact.form.email.placeholder')}  {...register("email", { pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, required: true, validate: (value) => { return !!value.trim() } })} />
                                    {errors.email && <span className={styles.errorInputs}>{t('contact.form.errors.email')}</span>}
                                </div>
                            </div>

                            <div className={styles.secondInputsContainer}>
                                <div className={`phone ${styles.phone}`}>
                                    <p className={styles.phoneLabel}>{t('contact.form.tel.label')}</p>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        rules={{
                                            required: true,
                                            validate: (value) => { return !!value.trim() }
                                        }}
                                        render={({ field: { onChange, value } }: any) => (
                                            <>
                                                <div className={errors.phone && styles.errorOutlinePhone}>
                                                    <PhoneInput
                                                        country={'tn'}
                                                        value={value}
                                                        onChange={onChange}
                                                        placeholder={t('contact.form.tel.placeholder')}
                                                    />
                                                </div>
                                                {errors.phone && errors.phone.type === "validate" && <p className={styles.errorInputsPhone}>{t('contact.form.errors.required')}</p>}
                                                {errors.phone && errors.phone.type === "required" && <p className={styles.errorInputsPhone}>{t('contact.form.errors.required')}</p>}
                                            </>
                                        )}
                                    />
                                </div>
                                <div className={styles.subject} style={{ display: 'grid' }}>
                                    <label htmlFor='subject'>{t('contact.form.subject.label')}</label>
                                    <input id="subject" className={errors.subject && styles.inputInvalid} type={'text'} placeholder={t('contact.form.subject.placeholder')}  {...register("subject", { required: true, validate: (value) => { return !!value.trim() } })} />
                                    {errors.subject && <span className={styles.errorInputs}>{t('contact.form.errors.required')}</span>}
                                </div>
                            </div>


                            <div style={{ display: 'grid' }}>
                                <label htmlFor='contentMessage'>{t('contact.form.message.label')}</label>
                                <textarea rows={9} className={errors.contentMessage && styles.inputInvalid} id="contentMessage" placeholder={t('contact.form.subject.placeholder')}  {...register("contentMessage", { required: true, validate: (value) => { return !!value.trim() } })} />
                                {errors.contentMessage && <span className={styles.errorInputs}>{t('contact.form.errors.required')}</span>}
                            </div>

                            <div className={styles.sendBtn}>
                                <BaseButton disabled={loading} type='submit' bg="linear" text={t('contact.form.sendBtn')} width={'100%'} />
                            </div>
                        </form>
                    </div>

                    <div className={styles.map}>
                        <iframe src="https://maps.google.com/maps?q=Cercle%20des%20Bureaux%20Centre%20Urbain%20Nord%201082%20Tunis&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                </div>
            </div>
            <ToastContainer hideProgressBar position="bottom-center" />

        </div>
    )
}

export default Contact