import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';
import s from './Statistics.module.css';

export default function Statistics(props) {
  const { title = 'Upload stats', stats } = props;
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(stat => (
          <StatisticsList key={stat.id} {...stat} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};
