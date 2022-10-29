import React from 'react';
import Button from './Button';

const PostArticle = props => {
    return (
        <article key={props.id} style = {styles.myArticle}>
                <img src={props.val.pImg} alt={props.val.pAlt} />
                <h1>{props.val.pTitle}</h1>
                <p style={styles.text}>{props.val.pDescription}</p>
            <div style= {styles.btn}> 
                <div onClick={props.edit}>
                    <Button btnText="Edit"/>
                </div>
                <div onClick={props.delete}>
                    <Button btnText="Delete"/>
                </div>
            </div>
        </article>
    )
}
export default PostArticle;

const styles = {
    myArticle: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'flex-wrap',
        justifyContent: 'space-between',
        minWidth: '250px',
        minHeight: '600px',
        background: 'white',
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
    text: {
        color: 'white'
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
    }
}


