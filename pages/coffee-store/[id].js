import { useRouter } from "next/router";
import Link from "next/link";
import coffeeStoresData from '../../data/coffee-stores.json'



export async function getStaticPaths() {
    return { 
        paths: [],
        fallback: true,
    }
}

export function getStaticProps({ params }) {
    console.log(params)

    return {
        props: {
            coffeeStore: coffeeStoresData.find(coffeeStore => {
                return coffeeStore.id === Number(params.id)
            })
        }
    }
}

  


const coffeeStore = (props) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading</div>
    }


    return (
        <>
            Coffee Store Page { router.query.id }
            <Link href='/'> back to Home </Link>
            <Link href='/coffee-store-dynamic'> Go to page dynamic </Link>
            <p> {props.coffeeStore.address} </p>
            <p> {props.coffeeStore.name} </p>
        </>
    )
}

export default coffeeStore