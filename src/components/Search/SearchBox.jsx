const SearchBox = ({ onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={({ target }) => {
          onChange(target.value);
        }}
      />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchBox;
