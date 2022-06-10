import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children, cool }) {
  return (
    <>
      <Header />
      <h2>I aam the page component</h2>
      {children}
      {cool}
    </>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
