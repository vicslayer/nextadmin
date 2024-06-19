import styles from "./footer.module.css"
const Footer=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.logo}>Lagma Dev</div>
            <div className={styles.text}>© All Rights Reserved 2024</div>            
        </div>
    );
};  
export default Footer