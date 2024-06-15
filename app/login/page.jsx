import styles from "@/app/ui/login/login.module.css"
const LoginPage=() =>{
    return(
        <div className={styles.container}>
            <form action="" styles={styles.form}>
                <input type="text" name="username" placeholder="Username" required></input>
                <input type="password" name="password" placeholder="Password" required></input>
                <button>Login</button>
            </form>
        </div>
    )
}
export default LoginPage