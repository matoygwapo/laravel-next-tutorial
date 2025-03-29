import styles from '@styles/products.module.scss'
import Link from 'next/link'
export default function ProductList({products}){
    return(
        <div className={styles.products}>
                {
                    products.map((product)=>(
                        <Link href={`/products/${product.id}`} className={styles.product} key={product.id}>
                            <p>{product.title}</p>
                            <img src={product.image} alt={product.title} />
                            <p>Price : {product.price}</p>
                        </Link>
                    ))
                }
        </div>
    )
}