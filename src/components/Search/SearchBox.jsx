import { useEffect, useState } from 'react';

const SearchBox = ({ defaultValue, onSubmit }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!defaultValue) return;
    setValue(defaultValue);
  }, [defaultValue]);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
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
