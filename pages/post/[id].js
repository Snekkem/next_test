import Link from "next/link";
import {MainLayout} from "../../components/MainLayout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Post({post: serverPost}) {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data)
        }

        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }

    return (
        <>
            <h3>#{post.id}</h3>
            <h4>{post.title}</h4>
            <h4>{post.body}</h4>
            <Link href={'/posts'}><a>Back to all posts</a></Link>
        </>
    )
}

// Post.getInitialProps = async ({query, req}) => {
//     if (!req) {
//         return {post: null}
//     }
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//     const post = await response.json()
//     return {
//         post
//     }
// }

export async function getServerSideProps({query, req}) {
    if (!req) {
        return {post: null}
    }
    const response = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post = await response.json()
    return {props: {post}}
}
