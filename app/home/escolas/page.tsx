import Image from "next/image";
import styles from "./styles.module.scss"

type SchoolItemProps = {
    name: string;
}

function SchoolItem(props: SchoolItemProps) {
    return (
        <li className={styles['school-item']}>
            <Image src="/icons/building.svg" alt="Escola" width={16} height={16} draggable={false} />
            <span>
                {props.name}
            </span>

            <Image src="/icons/edit.svg" alt="Editar" width={16} height={16} className={styles.edit} draggable={false} />
        </li>
    )
}

export default function SchoolPage() {
    const schools = Array(
        'E.E.E.M. Melvin Jones',
        'E.M.E.F. Guerino Zugno',
        'IFRS Campus Farroupilha',
    )

    return (
        <div className={styles.container}>
            <h1>Listagem de alunos</h1>
            <hr />
            <ul className={styles.listing}>
                {
                    schools.map(x => SchoolItem({ name: x }))
                }
            </ul>
        </div>
    )
}