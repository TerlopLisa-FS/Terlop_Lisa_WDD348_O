import React from 'react';
import Button from './Button';

function Form() {
    return (
        <article style={styles.myForm}>
            <section>

            </section>
        </article>
    )
}

export default Form

const styles = {
    myForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '120%',
        margin: '1%',
        background: 'black',
        padding: '2%',
        borderRadius: '5px',
    },
    input: {
        padding: '2%',
        margin: '1%',
    },
    inputCont:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
    },
    btn: {
        padding: '.5%',
        width: '50%'
    }

}