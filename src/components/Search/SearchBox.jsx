const SearchBox = ({ value, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        value={value}
        onChange={({ target }) => {
          onChange(target.value);
        }}
      />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchBox;
