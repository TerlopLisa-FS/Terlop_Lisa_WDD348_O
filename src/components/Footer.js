import React from 'react';
  
const Footer = () => (
  <footer className="footer">
    <p>This is react sticky footer!!</p>
  
  </footer>
);
  
export default Footer;

const styles = {

body: {
    margin: 0,
    height:'1000px'
   },
   App: {
    color: '#228b22',
    textAlign: 'center',
   },
   footer: {
    backgroundColor: 'green',
    borderTop:'2px solid red',
    position: 'fixed',
    width: '100%',
    bottom: '0',
    color: 'white',
    fontSize: '25px'
   
}
}