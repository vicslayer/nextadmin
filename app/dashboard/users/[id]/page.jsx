import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
const SingleUserPage=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                    John Doe
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="John Doe" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="JohnDoe@gmail.com" />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="+1234567890" />
                    <label>Address</label>
                    <textarea name="address" placeholder="New York"></textarea>
                    <label>Is Admin?</label>
                    <select name="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <button type="Submit">Update</button>
                </form>                
            </div>
        </div>
    );
}
export default SingleUserPage;