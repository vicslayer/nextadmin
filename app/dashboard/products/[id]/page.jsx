import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
const SingleProductPage=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Iphone" />                    
                    <label>Price</label>
                    <input type="number" name="price" placeholder="$123.00" />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="34" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder="White" />
                    <label>Size</label>
                    <input type="text" name="size" placeholder="Size" />                     
                    <label>Category</label>
                    <select name="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computer">Computer</option>
                    </select>                    
                    <label>Description</label>
                    <textarea name="desc" rows="10" placeholder="Desciption"></textarea>
                    <button type="Submit">Update</button>
                </form>                
            </div>
        </div>
    );
}
export default SingleProductPage;