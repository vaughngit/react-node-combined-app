import React from 'react'

export const InvokeApi = ({getProducts}) => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }
    
    return(
        <div style={{backgroundColor:'blue'}} className="display-board">
            <h4 style={{color: 'white'}}>Get Products from API </h4>
            <div className="number">
            {/* {numberOfUsers} */}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getProducts()} className="btn btn-warning">Get Products</button>
            </div>
        </div>
    )
}