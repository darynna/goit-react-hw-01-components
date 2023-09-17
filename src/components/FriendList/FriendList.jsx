import {FriendsWrap, Friends, FriendsInfo, Chip} from './FriendList.styled'

export const FriendList = ({friends}) => {
    return <FriendsWrap>
    {friends.map(({avatar, name, isOnline}) => (
      <Friends>
      <Chip status={isOnline}></Chip>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendsInfo>{name}</FriendsInfo>
    </Friends>
    ))} 
  </FriendsWrap>
}