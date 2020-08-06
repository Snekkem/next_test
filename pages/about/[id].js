import {useRouter} from "next/router";

export default function About() {

    const router = useRouter()
    return <h1>About {router.query.id}</h1>
}