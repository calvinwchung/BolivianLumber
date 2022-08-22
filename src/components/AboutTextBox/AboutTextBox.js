import styles from './styles.module.css'

const AboutTextBox = ({title, paragraph}) => {
    return (
        <div className={styles['text-box']}>
            <h3 className={styles["text-title"]}>{title}</h3>
            <p>{paragraph}</p>
        </div>
    );
}

export default AboutTextBox;