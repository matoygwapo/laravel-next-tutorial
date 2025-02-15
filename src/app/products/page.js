import '@/app/styles/products.scss'
import Link from 'next/link'
export default async function Products(){
    const request = await fetch('https://fakestoreapi.com/products')
    const products = await request.json()
    console.log(products)
    return(
        <div>
            <h1>THis is your product page</h1>
            <h5>Display all products here</h5>

            <div className="products">
                {
                    products.map((product)=>(
                        <Link href={`/products/${product.id}`} className='product' key={product.id}>
                            <p>{product.title}</p>
                            <img src={product.image} alt={product.title} />
                            <p>Price : {product.price}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}