export default async function Reviews({params}){
    const {id} = await params

    return(
        <div>
            <h1>Reviews of product id : {id}</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi harum sunt quo officia tempore alias quisquam veritatis ducimus saepe reprehenderit tenetur, impedit facilis mollitia. Accusantium voluptas unde animi dolorum recusandae!</p>
        </div>
    )
}