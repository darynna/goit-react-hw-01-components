import {AppWraper} from './App.styled'

import {Profile} from './Profile/Profile'
import user from './Profile/user.json'

import {Statistics} from './Statistics/Statistics'
import statisticData from './Statistics/data.json'

import friendList from "./FriendList/friends.json"

export const App = () => {
  return (
    <AppWraper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticData} title="Upload stats" />
    </AppWraper>
  );
};
