import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function About({title}) {

    const linkClickHandler = () => {
        Router.push('/')
    }

    return <MainLayout title={'About'}>
        <h1>About</h1>
        <h3>{title}</h3>
        <button onClick={() => Router.push('/posts')}>Go to posts</button>
        <button onClick={linkClickHandler}>Go back to home</button>
    </MainLayout>
}

About.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}/about`)
    const data = await response.json()

    return {
        title: data.title
    }
}