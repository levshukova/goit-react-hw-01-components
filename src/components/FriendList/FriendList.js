import FriendListCard from './FriendListCard';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  if (friends.length === 0) return null;
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendListCard
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
