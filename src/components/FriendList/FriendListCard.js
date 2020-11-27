import PropTypes from 'prop-types';
import s from './FriendListCard.module.css';

export default function FriendListCard({ isOnline, avatar, name }) {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
