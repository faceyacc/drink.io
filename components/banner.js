import styles from './Banner.module.css'
import { Inter } from '@next/font/google'
import coffeeMovie from '../public/static/coffee.mp4'


// const inter = Inter({ subsets: ['latin'] })

const Banner = (props) => {

    return (
        <>
            {/* <video src={coffeeMovie} className={styles.titleimage} autoPlay muted loop/> */}
            <div className={styles.container}>
                <h1 className={styles.bottomleft}> Drink<span className={styles.color}>.</span>io </h1>
                <p>Discover your local coffee shops!</p>
                <button  onClick={props.handleOnClick}> {props.buttonText} </button>
            </div>            
            <video src={coffeeMovie} className={styles.titleimage} autoPlay muted loop/>
            
        </>
    )
}

export default Banner