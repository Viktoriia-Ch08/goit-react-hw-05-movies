import { useEffect, useState } from 'react';
import CastListItem from './CastListItem/CastListItem';
import { getCast } from 'services/movies-api';
import NoInfo from 'components/NoInfo/NoInfo';
import { BounceLoader } from 'react-spinners';
import { List, Wrapper } from './Cast.styled';
import { showError } from 'services/notification';

const CastList = ({ id }) => {
  const [loader, setLoader] = useState(true);
  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function fetchCast() {
      try {
        const castInfo = await getCast(id);
        setCast(castInfo.cast);
        setLoader(false);
      } catch (error) {
        showError(error.message);
      }
    }
    fetchCast();
  }, [id]);

  return (
    <Wrapper>
      <BounceLoader
        className="loader"
        loading={loader}
        color={'#751975'}
        size={80}
      />
      {!loader && (
        <List>
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
        </List>
      )}
    </Wrapper>
  );
};

export default CastList;
