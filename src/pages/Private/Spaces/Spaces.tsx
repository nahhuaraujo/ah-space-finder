import { useEffect, useState } from 'react';
import { Space } from '../../../components';
import { ISpace } from '../../../models';
import { getSpaces } from '../../../services';
import * as S from './Spaces.styled';

const Spaces = () => {
  const [spaces, setSpaces] = useState<ISpace[]>([]);

  useEffect(() => {
    const fetchSpaces = async () => {
      let foundSpaces: ISpace[] = await getSpaces();
      setSpaces(foundSpaces);
    };
    fetchSpaces();
  }, []);

  return (
    <S.Spaces>
      <h1>Spaces</h1>
      <div>
        {spaces.map((space: ISpace) => (
          <Space key={space.id} space={space} />
        ))}
      </div>
    </S.Spaces>
  );
};

export default Spaces;
