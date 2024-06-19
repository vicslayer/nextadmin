import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import styles from "../ui/dashboard/dashboard.module.css"
<<<<<<< HEAD
=======
import Footer from "../ui/dashboard/footer/footer"
>>>>>>> c43f0f1f4cdca6ced2a1a0676cc0796743d36ebe

const Layout = ({children})=>{
    return(
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
<<<<<<< HEAD
=======
                <Footer />
>>>>>>> c43f0f1f4cdca6ced2a1a0676cc0796743d36ebe
            </div>
        </div>
    )
}
export default Layout