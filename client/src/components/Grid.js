import React from 'react';

function Grid() {

    const itemsArray = [
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_2fef1d7ff5dd82f8c8fc740d6e843867.png',
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_ee5cabbb0a99aafc6b35e334e5f06272.png',
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_4a1c4289b023b1359efe031473083ba8.png',
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_e3980373b7413cc833f573b8077b4a6e.png',
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_908f7de711584336619ee2ab35d0a52e.png',
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_896a239ba20e311a6761e6710af10db4.png',
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_a99d24dc2038820022f570c4beb41e13.png',
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_257b160add6e8d5f48388d05857a5cc1.png',
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_d08272ddb58d925a1eed0a36e21c178a.png',
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_7e6767591bf301cedb5df8593832eaf2.png',
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_70080eb2ba527f435ac59c2e16c185c7.png',
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_67a763b4c8ffa6d9747bc859e673dea6.png',
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_df1420c482f7575ab14447ab01f4cec0.png',
        'https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_b90a289d173a00513b695f9408e2f316.png'
    ]

    const gridItems = itemsArray.map((gridItem, idx) => {
        return(
            <div><img src={gridItem} alt="" /></div>
        )
    });

    return(
        <div className="sQgrid">
            {gridItems}
        </div>
    );
}

export default Grid;