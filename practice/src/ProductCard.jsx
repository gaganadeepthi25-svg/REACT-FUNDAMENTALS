import "./ProductCard.css"
function ProductCard(productDetails){

   
    return(

        <div className="container">
            <p className="title">ProductName:{productDetails.productName}</p>
            <p className="price">Price:{productDetails.price}</p>
            <p>{productDetails.isAvailable===true?<p className="green">"In Stock"</p>:<p className="red">"Out of Stock"</p>}</p>
            
        </div>

    )

}
export default ProductCard