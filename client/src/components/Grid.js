import React from 'react';

function Grid() {

    let url = 'https://www.bungie.net';
    const itemsArray = [
        '/common/destiny2_content/icons/44539459a73c2d4e894a69e1ccc95be5.png',
        '/common/destiny2_content/icons/574cb0d96560ea273ab246e91eb94c3f.png'
    ]

    const gridItems = itemsArray.map((gridItem, idx) => {
        return(
            <div><img src={url+gridItem} alt="" /></div>
        )
    });

    return(
        <div className="sQgrid">
            {gridItems}
        </div>
    );
}

export default Grid;