import React from 'react';
import {observer} from 'mobx-react';

const SearchBar = observer(({ handleChange }) => {
  return (
    <div className='input-group col-xs-12'>
      <input onChange={handleChange} type='text'
        className='form-control' placeholder='Search people by name...'
        aria-describedby='basic-addon1'
      />
    </div>
  );
})
export default SearchBar;
