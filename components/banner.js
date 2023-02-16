import styles from './Banner.module.css'
import { Inter } from '@next/font/google'
import coffeeMovie from '../public/static/coffee.mp4'


const inter = Inter({ subsets: ['latin'] })

const Banner = () => {

    return (
        <>
            {/* <video src={coffeeMovie} className={styles.titleimage} autoPlay muted loop/> */}
            <div className={styles.container}>
                <h1 className={styles.bottomleft}> Drink.io </h1>
                <p>Discover you local coffee shops!</p>
                <button className={styles.button}>View shops</button>
            </div>
            
            <video src={coffeeMovie} className={styles.titleimage} autoPlay muted loop/>
            
        </>
    )
}

export default Banner