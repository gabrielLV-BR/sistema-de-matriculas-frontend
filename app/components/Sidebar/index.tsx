import Link from "next/link"
import styles from "./styles.module.scss"

export function SideBar() {
    return (
        <section className={styles.container}>
            <div className={styles.margin}></div>
            <ul className={styles.content}>
                <li><Link href={'/home/'}>Início</Link></li>
                <li><Link href={'/home/registrar'}>Cadastrar</Link></li>
                <li><Link href={'/home/alunos'}>Alunos</Link></li>
                <li><Link href={'/home/escolas'}>Escolas</Link></li>
                <li className={styles.bottom}><a href="#">Sair</a></li>
            </ul>
        </section>
    )
}