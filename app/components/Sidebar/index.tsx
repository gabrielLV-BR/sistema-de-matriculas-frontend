"use client"

import Link from "next/link"
import styles from "./styles.module.scss"
import Image from "next/image"


type SideBarLinkProps = {
    href: string;
    icon: string;
    label: string;
}

function SideBarLink(props: SideBarLinkProps) {
    return (
        <li className={styles['sidebar-item']}>
            <Link href={props.href} className={styles.link}>
                <Image src={props.icon} alt={props.label} width={32} height={32} />
                {props.label}
            </Link>
        </li>
    )
}

export function SideBar() {
    return (
        <section className={styles.container}>
            <SideBarLink href="/home/" label="Início" icon="/icons/home.svg" />
            <SideBarLink href="/home/registrar" label="Adicionar" icon="/icons/personadd.svg" />
            <SideBarLink href="/home/alunos" label="Alunos" icon="/icons/people.svg" />
            <SideBarLink href="/home/escolas" label="Escolas" icon="/icons/education.svg" />

            <SideBarLink href="#" label="Sair" icon="/icons/logout.svg" />
        </section>
    )
}