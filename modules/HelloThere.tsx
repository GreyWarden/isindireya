import { FC } from 'react'
import styles from '@modules/HelloThere.module.scss'

export const HelloThere: FC = () => (
    <div className={ styles.helloThere__container }>
        Hello there!
    </div>
)
