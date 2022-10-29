import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import avatar from './MyAvatar';
const MyForm = (props) => {
    return(
        <form style={styles.container}>
            <h1>Your Profile</h1>
            <img src={props.avatar} alt='ASPCA'/>
            <p style={styles.inputRow}>
            <label>Name: {props.fName} {props.lName}</label>
            </p>
            <p style={styles.inputRow}>
                <label>Street: {props.street} City: {props.city} </label>
            </p>
            <p style={styles.inputRow}>
                <label>State: {props.state} Zip: {props.zipcode}</label>
            </p>
            <p style={styles.inputRow}>
                <label>Email: {props.email}</label>
            </p>
            <p style={styles.inputRow}>
            <label>Phone: {props.phone}</label>
            </p>
            <button type="submit" style={styles.btn}><FaPencilAlt/> Edit Profile</button>
        </form>
    );
}
export default MyForm

const styles ={
    container: {
        minWidth: '60vh',
        background: 'violet',
        marginLeft: '5%',
        marginBottom: '1%',
        marginTop: '20%',
        padding: '1%',
        backgroundColor: '#B96FAE',
        color: '#650038',
        borderRadius: '2%',
        border: 'black',
        boxShadow: '0.188rem 0.188rem 0.188rem grey'
    },
    inputRow: {
        display: 'flex',
        flexDirection: 'row',
        padding: '2%',
        marginLeft: '2%',

    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 'bold',
        color: '#B96FAE',
        padding: '3%',
        borderRadius: '10%',
        border: 'none',
        cursor: 'pointer',
        margin: '1rem',
        width: '8rem',
        hover: '#650038'
    }
}
