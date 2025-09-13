import ProductCard from "./ProductCard.jsx"
import UserAvatar from "./UserAvatar.jsx"
import "./App.css"
import Greetings from "./Greetings.jsx"
import Profile from "./Profile.jsx"
import BlogPost from "./BlogPost.jsx"

function App() {

 /* const productName = "Pepsi"
  const price = 20
  const isAvailable = true
  const isInStock = false*/
  /* const userName = "S.Gagana Deepthi"
   const course = "B.Tech (CSE)"
   const rollNo = "24VV1A0557"
   const bloodGroup = "O+ve"
   const dob = "04/10/2025"*/
  /* const products = [{
     productName: "product1",
     price: 100,
     isAvailable: true
   },
   {
     productName: "product2",
     price: 200,
     isAvailable: true
   },
   {
     productName: "product3",
     price: 300,
     isAvailable: true
   }]*/
 /* const posts = [{
    id:1,
    author: "Deepthi",
    title: "hana",
    description: "be happy"
  }, {
    id:2,
    author: "Gagana",
    title: "love",
    description: "life is all about love"
  }, {
    id:3,
    author: "chaithra",
    title: "success",
    description: "about successfull people"
  }]*/


  return (

    <div className="main" >

      {/* <p className="main"><ProductCard productName={productName} price={price} isAvailable={isInStock} /> */}
      {/* <ProductCard productName={productName} price={price} isAvailable={isAvailable} /></p> */}
      {/* <p className="main"> <UserAvatar username={userName} course={course} rollno={rollNo} bloodgroup={bloodGroup} dob={dob} /> */}
      {/* <UserAvatar username={userName} course={course} rollno={rollNo} bloodgroup={bloodGroup} dob={dob} /></p> */}
      {/* {products.map ((num)=>( */}
        {/* // <ProductCard productName={products.productName} price={products.price} isAvailable={products.isAvailable} /> */}
      {/* ))} */}
      {/* {
        posts.map((post)=>(
          <BlogPost key={post.id} author={post.author} title={post.title} description={post. description}/>
        ))
      } */}
    </div>

  )

}

export default App
