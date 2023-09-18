import {Friends, FriendsInfo, Chip} from './FriendListItem.styled'

export const FriendListItem = ({friends}) => {
    return friends.map(({avatar, name, isOnline}) => (
      <Friends>
      <Chip status={isOnline}></Chip>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendsInfo>{name}</FriendsInfo>
    </Friends>
    ))
}