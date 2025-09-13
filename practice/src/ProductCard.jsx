function ProductCard({productDetails}){

   
    return(

        <div>
            <p>ProductName:{productDetails.productName}</p>
            <p>Price:{productDetails.price}</p>
            <p>{productDetails.isAvailable===true?"In Stock":"Out of Stock"}</p>
        </div>

    )

}
export default ProductCard