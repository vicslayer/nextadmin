import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import styles from "./rightbar.module.css"
import Image from "next/image"
const RightBar= ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bgimg} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥 Available Now</span>
                    <h3 className={styles.title}>
                        How to use the new version of admin dashboard?
                    </h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>🚀 Coming Soon</span>
                    <h3 className={styles.title}>New Server actions are available!</h3>
                    <span className={styles.subtitle}>Boost your productivity</span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Read More...
                    </button>
                </div>
            </div>

        </div>
    );
};
export default RightBar;