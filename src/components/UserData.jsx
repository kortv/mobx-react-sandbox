import React from 'react';

const UserData = ({ handleClick, user }) => {
  const imgSrc = user.image ? `images/${user.image}.svg` : '';
  return (
    <tr onClick={handleClick} data-id={user.id}>
      <td data-id={user.id}><img src={imgSrc} /></td>
      <td data-id={user.id}>{ user.name }</td>
      <td data-id={user.id}>{ user.age }</td>
      <td data-id={user.id}>{ user.phone }</td>
    </tr>
  );
}
export default UserData;
