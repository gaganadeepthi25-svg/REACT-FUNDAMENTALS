import { useState } from "react"
function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [count, setCount] = useState(0)
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const [formData,setFormData] =useState({
    email:"",
    password:""
})

  const handleIncreement = () => {

    setCount((prevCount) => prevCount + 1)
    console.log(count)
  }

  const handleClick = (name) => {
    console.log("you clicked the button")
    alert("Hello " + name)
  }
  const handleChange = (event) => {
    //console.log(event.target.name) 
    //console.log(event.target.value) 
    setFormData({
      ...formData,
      [event.target.name]:event.target.value

    })

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("you have logged in")
    console.log(`Email:${formData.email} \n Password:${formData.password} \n you are logged in`)
    alert(`Email:${formData.email} Password:${formData.password} \n you are logged in`)
  }

  return (

    <div >
      <form onSubmit={handleSubmit}>
        <p>I am a button</p>
        <input type="text" name="email" placeholder="Enter your email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
        <button onClick={() => handleClick("Deepthi")}>click me</button>
        {/* <button onClick={handleSubmit}>log in</button>  */}
        <button type="submit">log in</button>
      </form>
      {/* <p>{count}</p>
      <button onClick={handleIncreement}>Increement</button>   */}
    </div>
  )

}

export default App
