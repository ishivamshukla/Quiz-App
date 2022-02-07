import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.section`
  background-color: var(--secondary-bg-color);
  padding: 25px 0;
  text-align: center;

  p {
      margin: 0;
  }

  a {
      text-decoration: none;
  }
`
const Footer = () => {
    return (
        <FooterWrap>
            <div className="wrapper">
                 Welcome to Quiz App 
            </div>
        </FooterWrap>
    )
}


export default Footer;
