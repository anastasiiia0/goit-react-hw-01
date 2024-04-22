import css from './FriendList.module.css';

import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
