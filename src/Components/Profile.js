import {useState, React} from 'react'

function Profile() {
    const [logedin,setlogin] = useState(2)
  return (
  
   <div>
   {logedin===1?
   <h2>login</h2>
   :logedin===2?<h2>login2</h2>
   :<h2>Fail</h2>}
    </div>
  )
}
export default Profile;