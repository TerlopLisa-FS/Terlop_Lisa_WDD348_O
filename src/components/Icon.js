import React from 'react';

const MyIcon = props => {
    return (
        <img src= {props.MyIcon} alt={props.IconAlt} style={styles.myIcon} />
    )
}
export default MyIcon

const styles= {
    myIcon:{
        height: '75px',
        cursor: 'pointer',
        borderRadius: '10%'
    }
}