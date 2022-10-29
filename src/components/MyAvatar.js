import React from 'react';

const MyAvatar = props => {
    return (
        <img src= {props.AvatarIcon} alt={props.AvatarAlt} style={styles.myAvatar} />
    )
}
export default MyAvatar

const styles= {
    myAvatar:{
        display: 'flex',
        flexDirection: 'row',
        height: '75px',
        cursor: 'pointer',
        marginLeft: '15%',
        borderRadius: '50%'
    }
}
