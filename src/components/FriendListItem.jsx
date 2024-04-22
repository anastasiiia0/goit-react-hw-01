import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="48" className={css.friendPic} />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(
          css.friendStatus,
          isOnline ? css.onlineStatus : css.offlineStatus
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
