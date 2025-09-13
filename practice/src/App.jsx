import ProductCard from "./ProductCard.jsx"

function App() {
  
   const productName="Pepsi"
   const price=20
   const isAvailable=true
  

  return (

    <div>

      <ProductCard productName={productName} price={price} isAvailable={isAvailable} />

    </div>

  )

}

export default App
