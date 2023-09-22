import styles from "./styles.module.scss"

import { InputText } from "@/app/components/InputText";

export default function RegisterPage() {
    return (
        <div className={styles.container}>
            <h1>Cadastro de Aluno</h1>
            <form action="#" className={styles.form}>
                <InputText label="Nome" />
                <InputText label="CPF" />
                <InputText label="Endereço" />
                <InputText label="Email" />
                <hr />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}