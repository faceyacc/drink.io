import styles from './Sidebar.module.css'
import { BiBookmarkAltMinus, BiSearchAlt2 } from 'react-icons/bi'

const Sidebar = () => {
    return (
        <>
            <div className={styles.container}>
                <a className={styles.icon}> <BiBookmarkAltMinus color={'grey'} size={25}/> </a>
                <a className={styles.icon}><BiSearchAlt2 color={'grey'} size={25}/> </a>
            </div>
        </>
    )
}

export default Sidebar