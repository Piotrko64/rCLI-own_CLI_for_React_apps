
import styles from './amazingButton.module.scss'
import { useAmazingButton } from './useAmazingButton'

export function AmazingButton(){

const { counter } = useAmazingButton(0)

    return(
        <>
            <h1> Hello World </h1>
            <div className={styles.example}> !!! </div>
        </>
    )
}
    
