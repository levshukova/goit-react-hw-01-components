import PropTypes from 'prop-types';
import s from './Profile.module.css';
import Stats from './Stats';

export default function Profile({
  name = 'Unknown',
  tag,
  location,
  avatar = 'https://i.imgur.com/FFmb6vR.png',
  stats,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <Stats {...stats} />
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
