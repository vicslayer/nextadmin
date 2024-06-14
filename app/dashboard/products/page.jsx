import styles from "@/app/ui/dashboard/products/products.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
const ProductsPage=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                                
                <Search placeholder="Search for a product..." />

                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add Button</button>
                </Link>              
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.product}>
                            <Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage} /> 
                            Iphone
                        </td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        <td>$123.00</td>
                        <td>14.06.2024</td>
                        <td>34</td>        
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>
            <Pagination />
        </div>
    );
};
export default ProductsPage;