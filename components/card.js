
import Image from 'next/image'
import styles from './Card.module.css'
import Link from 'next/link'
import { motion } from "framer-motion";


const Card = (props) => {
    return (
        <motion.div className={(styles.container)} whileHover={{ scale: 1.1 }}>
            <Link href={props.href} className={styles.cardLink}>    
                <div className={styles.cardImageWrapper}>
                    <Image 
                        className={styles.cardImage} 
                        src={props.imgUrl} 
                        width={260} 
                        height={160} 
                    />
                </div>
                <div className={styles.cardHeaderWrapper}>
                    <h2 className={styles.cardHeader} >{props.name}</h2>
                </div>
            </Link>
        </motion.div>
    )
}

export default Card