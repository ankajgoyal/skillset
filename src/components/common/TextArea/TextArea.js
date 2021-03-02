import React from 'react'
import styles from './textArea.module.css'

const TextArea = ({placeholder, value, onChange, error}) => {
    return <><textarea className={styles.textArea} placeholder={placeholder} value={value} onChange={onChange}/>
    {(error && !value) && <div className={styles.validationMessage}>* Please Provide some message</div>}
    </>
}

export default TextArea