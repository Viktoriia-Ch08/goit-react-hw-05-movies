import { useState } from 'react';
import { Button, FormElement, Input } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <FormElement onSubmit={handleSubmit}>
      <Input
        type="text"
        name="search"
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
        }}
      />
      <Button type="submit">search</Button>
    </FormElement>
  );
};

export default SearchBox;
