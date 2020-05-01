import React, { useState, useEffect } from 'react';

function JsonApiProject() {

    //const url = "//react-js.local/imger/results.php"; 

    const [items, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('http://react-js.local:80/imger/results.json');
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const posts = await response.json();
            setPosts(posts);
        }
    
        loadPosts();
   }, [])



    return(
        <div className='row'>
            <div className='col-md-12'>
                <h1>Here is my API Project</h1>
                <p className='text-justify'>The content below is fetched from <code>'http://react-js.local/imger/results.json'</code>.</p>
                <h3>Unfortuanatly this project is suffering from a CORS issue and will be put on hold until I can figure this out :(</h3>
                <ul className="list-group">
                    {items
                    //.filter((e) => e.id === pageId)
                    .map(item => (
                        <a key={item.id} className="list-group-item" href={`/projects/api-project/${item.id}`}>
                            <li className="d-flex justify-content-between align-items-center">
                                {item.id}
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default JsonApiProject;