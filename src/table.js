import './table.css'

function TitleCase(S){
  S = S.toLowerCase()
  let x = S.split(' ')
  x = x.map(value => value.charAt(0).toUpperCase()+value.slice(1));
  return x.join(" ")

  
}

function Table({tableData, handleAgeClick, handleNameClick, handleEditClick, handleDeleteClick}) {

    const listItem = tableData.map((data)=>
        <tr key ={data.id}>
        <td>{TitleCase(data.name)}</td>
        <td>{data.age}</td>
        <td>{data.mobile}</td>
        <td>{data.email}</td>
        <td>{TitleCase(data.city)}</td>
        <td className='buttons'>
          <button className="delete" onClick={event =>handleDeleteClick(event, data.id)}>Delete</button>
          <button className="edit" onClick={event =>handleEditClick(event, data)}>Edit</button>
        </td>
        
      </tr>
    );
    return (
      <table id='person'>
        <thead>
          <tr>
            <th>Name<button className="btn" onClick={handleNameClick}>A-Z</button></th>
            <th>Age<button className="btn" onClick={handleAgeClick}>&#8645;</button></th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>City</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody id ="body">
          {listItem}
        </tbody>
      </table>


  );
}



export default Table;