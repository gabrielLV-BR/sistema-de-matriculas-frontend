import styles from "./layout.module.scss";
import { SideBar } from "../components/Sidebar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <SideBar />
            </div>
            <main className={styles.content}>
                {children}
            </main>
        </div>
    )
}
