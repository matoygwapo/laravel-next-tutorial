import '@/app/styles/product.scss'
import Link from 'next/link'
export default async function Product({params}){
    const {id} = await params
    const request = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await request.json()
    console.log(product)
    return (
        <div>
            <h1>Display info of product id : {id}</h1>
            <h5>{product.title}</h5>
            <img className="product-img" 
                src={product.image} alt={product.title}
            />
            <Link href={`/products/${id}/reviews`}>Visit Reviews</Link>
        </div>
    )
}