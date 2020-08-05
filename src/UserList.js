import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const UserList = () => {

  const  [userList, setUserList] = useState([])


    useEffect( () => {

const fetchData = async () => {

const result = await axios.get("https://jsonplaceholder.typicode.com/users");

setUserList(result.data)

}

fetchData();

    })


    return ( <div>

<Table  striped bordered hover variant="dark" >
<th>Name</th>
<th>User Name</th>
<th>Email</th>
<th>Address</th>


<tbody>{userList.map((el)=>

<tr key={el.id}>
<td>{el.name}</td>
<td>{el.username}</td>
<td>{el.email}</td>
<td>{ ` Street :  ${el.address.street} , Suite : ${el.address.suite} , city : ${el.address.city} `} </td>
</tr>

)}



    
</tbody>

</Table>


    </div> );
}
 
export default UserList;