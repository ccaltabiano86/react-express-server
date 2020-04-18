import React, { useState, useEffect } from 'react';

function ApiProject() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
            //'https://obeliskdigital.com.au/client_preview/wordpress/wp-json/wp/v2/posts'
        );

        const items = await data.json();

        //console.log(data);
        console.log(items);
        setItems(items);
    }

    //const pageId = 1;

    return(
        <div className='row'>
            <div className='col-md-12'>
                <h1>Here is my API Project</h1>
                <p className='text-justify'>The content below is fetched from <code>'https://jsonplaceholder.typicode.com/posts'</code>. This data is mapped to the list items below. I have mapped the title (<code>item.title</code>) to the content and the id (<code>item.id</code>) to the <code>href</code> of the <code>&lt;a&gt;</code> element. I have also added the (<code>item.userId</code>) to the badges on the right hand side of each <code>&lt;li&gt;</code>. Because its fun to play with mapping.</p>
                <ul className="list-group">
                    {items
                    //.filter((e) => e.id === pageId)
                    .map(item => (
                        <a key={item.id} className="list-group-item" href={`/projects/api-project/${item.id}`}>
                            <li className="d-flex justify-content-between align-items-center">
                                {item.title}
                                <span className="badge badge-primary badge-pill">User ID: {item.userId}</span>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ApiProject;