import React from 'react';

function SearchBar({placeholder, data}) {
    return (
        <div>
            {/* <input type="text" placeholder={placeholder}/>
            <div className="dataResult">
            {data.map((value, key) => {
                return (
                    <div>
                        <img src = {value.collectionImage} alt="collection"/>
                        <p>{value.collectionTitle}</p>
                        <p>{value.description}</p>
                    </div> 
                )
            })}
            </div> */}
        </div>
    )
}

export default SearchBar;