import styles from '../../../styles/Home.module.scss'

const TestimonialItem = ({ name, text, post }: { name: string, text: string, post: string }) => {

    return (
        <div>
            <p className={styles.text}>{text}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.post}>{post}</p>
        </div>
    )
}

export default TestimonialItem