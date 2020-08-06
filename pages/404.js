import Link from "next/link";
import css from '../styles/error.module.scss'
import {MainLayout} from "../components/MainLayout";

export default function ErrorPage() {
    return <MainLayout>
        <h1 className={css.error}>ERROR 404</h1>
        <p>Please <Link href={'/'}><a>go back to safety</a></Link></p>
    </MainLayout>
}