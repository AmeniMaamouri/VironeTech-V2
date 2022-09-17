import styles from './BaseButton.module.scss'

const BaseButton = ({ width, text, bg, type, disabled }: { width: string, text: string, bg: string, type?: "button" | "submit" | "reset", disabled?:boolean }) => {
    return (
        <div>
            <button disabled={disabled} type={type} style={bg === "linear" ? { maxWidth: width, background: "linear-gradient(180deg, #E8557F 0%, #EF695F 100%)", color: 'white' } : { maxWidth: width, background: 'white', color: "black" }} className={styles.button}>
                {text}
            </button>
        </div>
    )
}

export default BaseButton