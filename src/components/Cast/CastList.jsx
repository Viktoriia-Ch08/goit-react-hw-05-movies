import { useEffect, useState } from 'react';
import CastListItem from './CastListItem/CastListItem';
import { getCast } from 'services/movies-api';
import NoInfo from 'components/NoInfo/NoInfo';

const CastList = ({ id }) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function fetchCast() {
      const castInfo = await getCast(id);
      setCast(castInfo.cast);
    }
    fetchCast();
  }, [id]);

  return (
    <ul>
      {cast.length ? (
        cast.map(({ id, character, name, popularity, profile_path }) => {
          return (
            <CastListItem
              key={id}
              character={character}
              name={name}
              popularity={popularity}
              img={profile_path}
            />
          );
        })
      ) : (
        <NoInfo />
      )}
    </ul>
  );
};

export default CastList;
