import Card from "../ui/dashboard/card/card"
import Charts from "../ui/dashboard/charts/charts"
import RightBar from "../ui/dashboard/rightbar/rightbar"
import Transaction from "../ui/dashboard/transactions/transactions"
import styles from "../ui/dashboard/dashboard.module.css"

const Dashboard=()=>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <Transaction />
                <Charts />
            </div>
            <div className={styles.side}>
                <RightBar />
            </div> 
        </div>
    );
};
export default Dashboard