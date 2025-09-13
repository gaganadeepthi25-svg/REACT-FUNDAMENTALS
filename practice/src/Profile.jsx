function Profile(){
    const name="Deepthi"
    const age=18
    const isstudent=true
    return(
        <div>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>{isstudent===true?"I am a student":"I am not a student"}</p>
        </div>
    )
}
export default Profile