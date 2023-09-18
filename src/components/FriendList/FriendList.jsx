import {FriendsWrap} from './FriendList.styled'
import {FriendListItem} from '../FriendListItem/FriendListItem'


export const FriendList = ({friendList}) => {
    return <FriendsWrap>
<FriendListItem friends={friendList}/>
  </FriendsWrap>
}