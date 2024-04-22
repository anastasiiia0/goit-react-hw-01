import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div>
        <img src={image} alt="User avatar" className={css.avatarPic} />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
      <ul className={css.userStatsList}>
        <li className={css.userStatsListItem}>
          <span className={css.userStatsProp}>Followers</span>
          <span className={css.userStatsValue}>{stats.followers}</span>
        </li>
        <li className={css.userStatsListItem}>
          <span className={css.userStatsProp}>Views</span>
          <span className={css.userStatsValue}>{stats.views}</span>
        </li>
        <li className={css.userStatsListItem}>
          <span className={css.userStatsProp}>Likes</span>
          <span className={css.userStatsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
