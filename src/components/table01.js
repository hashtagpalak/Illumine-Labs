import React from 'react';
import Details from './details'

function Table01(){
    return(
        <>
        <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
            <Details/>
            <Details/>
            <Details/>
          </table>
          </>
    )
    
}

export default Table01;