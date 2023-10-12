import { useState } from 'react';

const SearchBox = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
        }}
      />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchBox;
