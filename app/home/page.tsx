import { useState } from "react"
import styles from "./styles.module.scss"

export default function HomePage() {
    return (
        <main className={styles.container}>
            <h1>Bem vindo ao sistema, Gabriel!</h1>
            <hr />

            <ul className={styles.utilities}>
                <li>Cadastrar alunos</li>
                <li>Cadastrar escolas</li>
                <li>Matricular alunos</li>
                <li>Consultar dados estatísticos</li>
                <li>Exportar dados para planilhas</li>
            </ul>
        </main>
    )
}
