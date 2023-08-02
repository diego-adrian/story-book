import PropTypes from 'prop-types';
import './badge.css';

export const Badge = ({ size, color, primary, fn }) => {
  return <>
    <section className='container'>
      <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill={color} d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"/>
      </svg>
      <div className={`counter counter--${primary}`} onClick={fn}>{size}</div>
    </section>
  </>
};


Badge.propTypes = { 
  size: PropTypes.number,
  color: PropTypes.string,
  primary: PropTypes.bool,
  fn: PropTypes.func
}

Badge.defaultProps = {
  size: 50,
  color: '#F90',
  primary: true,
  fn: () => {
    console.log('Me hiciste click');
  }
}