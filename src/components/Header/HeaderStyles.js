import Styled from 'styled-components';


const styles = theme => ({
  appBar: {
    width: '100%',
    position: 'fixed',
  },
});


export const Brand = Styled.div`
  color: #ffffff !important;
  margin-left: 12px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  line-height: 60px;
  text-transform: uppercase;

  & a {
    color: #ffffff !important;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 3px;
    line-height: 60px;
    text-transform: uppercase;
    float: left;
    text-decoration: none;
    background-color: transparent;
  }
`;

export default styles;