import React from 'react';

const Button = props => {
    return (
        <button style = {styles.btn} onClick={props.OnClick}>
            {props.btnText}
        </button>
    )
}

export default Button

const styles = {
    btn: {
        fontWeight: 'bold',
        color: '#B96FAE',
        padding: '3%',
        borderRadius: '10%',
        border: 'none',
        cursor: 'pointer',
        margin: '1rem',
        width: '20rem',
        hover: '#650038'
    }
}
