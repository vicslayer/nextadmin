<<<<<<< HEAD
const Login=() =>{
    return(
        <div>Login</div>
    )
}
export default Login
=======
import styles from "@/app/ui/login/login.module.css"
const LoginPage=() =>{
    return(
        <div className={styles.container}>
            
            <form action="" className={styles.form}>
                <h1>Login</h1>
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <button>Login</button>
            </form>
        </div>
    )
}
export default LoginPage
>>>>>>> c43f0f1f4cdca6ced2a1a0676cc0796743d36ebe
