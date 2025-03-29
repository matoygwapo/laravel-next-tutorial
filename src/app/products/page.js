import styles from '@styles/products.module.scss'
import Link from 'next/link'
import ProductList from '@/components/ProductList'
export default async function ProductsPage(){
    const request = await fetch('https://fakestoreapi.com/products')
    const products = await request.json()
    return(
        <div>
            <h1 className={styles.title}>THis is your product page</h1>
            <h5>Display all products here</h5>
            <ProductList products={products}/>
        </div>
    )
}