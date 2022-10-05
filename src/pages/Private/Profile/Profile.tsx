import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { capitalizeFirstLetter } from '../../../utils/strings.util';
import * as S from './Profile.styled';

const Profile = () => {
  const user = useSelector((store: AppStore) => store.user);

  const userAttrs = Object.keys(user);
  const userVals = Object.values(user);

  const renderUserData = () => {
    let data = [];
    for (let i = 0; i < userAttrs.length; i++) {
      data.push(
        <S.UserDataRow key={i}>
          <p>{capitalizeFirstLetter(userAttrs[i])}:</p> {userVals[i]}
        </S.UserDataRow>
      );
    }
    return data;
  };

  return (
    <S.Profile>
      <h1>Profile</h1>
      <S.DataContainer>{renderUserData()}</S.DataContainer>
    </S.Profile>
  );
};

export default Profile;
