import React from 'react';
import styles from './ErrorWrapper.module.scss'


function ErrorWrapper({ message }) {
  return (
    <div className={styles.errorText}>
      {message}
    </div>
  )
}

export default ErrorWrapper