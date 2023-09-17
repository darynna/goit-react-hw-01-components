import { ThemeProvider } from 'styled-components';
import theme from '../constant/theme'

import {AppWraper} from './App.styled'

import {Profile} from './Profile/Profile'
import user from './Profile/user.json'

import {Statistics} from './Statistics/Statistics'
import statisticData from './Statistics/data.json'

import friendList from "./FriendList/friends.json"
import {FriendList} from './FriendList/FriendList'

import transactions from './TransactionHistory/transactions.json'
import {TransactionHistory} from "./TransactionHistory/TransactionHistory"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <AppWraper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticData} title="Upload stats" />
      <FriendList friends={friendList}/>
      <TransactionHistory transactions={transactions} />;
    </AppWraper>
    </ThemeProvider>
  );
};
