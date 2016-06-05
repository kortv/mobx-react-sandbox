import React from 'react';
import {observer} from 'mobx-react';

const Toolbar = observer(({ sortNames }) => {
  return (
    <div className='toolbar'>
      <button className='btn btn-default' data-kind='name' onClick={sortNames}>Sort by name</button>
      <button className='btn btn-default' onClick={sortNames}>Sort by age</button>
    </div>
  );
})
export default Toolbar;
