import PropTypes from 'prop-types';
import s from './StatisticsList.module.css';

export default function StatisticsList({ label, percentage }) {
  return (
    <li className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}
StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
