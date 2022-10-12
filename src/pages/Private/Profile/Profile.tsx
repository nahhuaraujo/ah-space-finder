import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { capitalizeFirstLetter } from '../../../utils/strings.util';
import * as S from './Profile.styled';

const Profile = () => {
  const user = useSelector((store: AppStore) => store.user);

  const userAttrs = Object.keys(user);
  const userVals = Object.values(user);

  return (
    <S.Profile>
      <h1>Profile</h1>
      <S.ProfileDataContainer>
        {userAttrs.map((attr, i) => (
          <S.ProfileDataRow key={i}>
            <p>{capitalizeFirstLetter(attr)}:</p> <span>{userVals[i]}</span>
          </S.ProfileDataRow>
        ))}
      </S.ProfileDataContainer>
    </S.Profile>
  );
};

export default Profile;
