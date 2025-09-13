function ProductCard({productName,price,isAvailable}){

   
    return(

        <div>
            <p>ProductName:{productName}</p>
            <p>Price:{price}</p>
            <p>{isAvailable===true?"In Stock":"Out of Stock"}</p>
        </div>

    )

}
export default ProductCard