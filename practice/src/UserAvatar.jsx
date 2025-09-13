import "./UserAvatar.css"
function UserAvatar({ username, course, rollno, bloodgroup, dob }) {
   /* const name = {
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'red'
    }*/
    return (
        <div className="all">
            <p className="img"><img src="./images.jpg" alt="" /></p>
            <p className="name">{username}</p>
            <p>Course:{course}</p>
            <p>ROLL NO:{rollno}</p>
            <p>Blood Group:{bloodgroup}</p>
            <p>DOB:{dob}</p>

        </div>
    )
} export default UserAvatar