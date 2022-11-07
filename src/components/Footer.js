import React from 'react';
  
const Footer = () => (
  <footer className="footer" style={styles.footer}>
    <p style={styles.p} id="copyright">&copy;2022 MyCollectible. All Rights Reserved. Terms of use and Privacy Policy</p>
  
  </footer>
);
  
export default Footer;

const styles = {
   footer: {
    backgroundColor: '#BBE4D9',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '60px',
    color: 'white',
    fontSize: '16px',
    textAlign: 'center'
   
},
p: {
  opacity: '50%',
  fontSize: '1.5rem',
  margin: '1.5rem'
}
}