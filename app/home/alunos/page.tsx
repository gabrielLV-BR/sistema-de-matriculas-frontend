import Image from "next/image";
import styles from "./styles.module.scss"

type StudentItemProps = {
    name: string;
}

function StudentItem(props: StudentItemProps) {
    return (
        <li className={styles['student-item']}>
            <Image src="/icons/profile.svg" alt="Perfil do aluno" width={16} height={16} draggable={false} />
            <span>
                {props.name}
            </span>

            <Image src="/icons/edit.svg" alt="Editar" width={16} height={16} className={styles.edit} draggable={false} />
        </li>
    )
}

export default function StudentPage() {
    const students = Array(
        'Fulano',
        'Sicrano',
        'Beltrano'
    )

    return (
        <div className={styles.container}>
            <h1>Listagem de alunos</h1>
            <hr />
            <ul className={styles.listing}>
                {
                    students.map(x => StudentItem({ name: x }))
                }
            </ul>
        </div>
    )
}