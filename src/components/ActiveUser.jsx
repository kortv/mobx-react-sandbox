import React from 'react';
import {observer} from 'mobx-react';


const ActiveUser = observer(({ user }) => {
  const imgSrc = user.image ? `images/${user.image}.svg` : '';
  return (
    <div className='col-sm-4'>
      <div className='act-usr'>
        <img className='img-responsive' src={imgSrc} alt={ user.image } />
        <h2>
          { user.name }
        </h2>
        <table className='table table-responsive'>
          <tbody>
            <tr>
              <td>Age:</td>
              <td>{ user.age }</td>
            </tr>
            <tr>
              <td>Favorite animal:</td>
              <td>{ user.image }</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{ user.phone }</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Favorite phrase: </strong>{ user.phrase }
        </p>
      </div>
    </div>
  );
})
export default ActiveUser;
