import React, { useState, useEffect } from 'react';

function JsonApiProject() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);


    const fetchItems = async () => {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', 'http://react-js.local:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');
        //headers.append('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        headers.append('Content-Type', 'application/json; charset=utf-8');
        const url = "http://react-js.local/imger/results.json"; 
        const data = await fetch(url, {
            origin: 'http://react-js.local',
            mode: 'cors',
            credentials: 'same-origin',
            method: 'POST',
            headers: headers
          })



            

        const items = await data.json();

        //console.log(data);
        console.log(items);
        setItems(items);
    }


/*
    const fetchItems = async () => {
        // Example POST method implementation:
        async function postData(url = 'http://react-js.local/imger/results.json', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            //return response.json(); // parses JSON response into native JavaScript objects
            const items =  response.json(); 
            console.log(items);
            setItems(items);
        }

        postData('http://react-js.local/imger/results.json', { answer: 42 })
        .then((data) => {
            console.log(data); // JSON data parsed by `response.json()` call
        });
    }
*/

    //const pageId = 1;

    return(
        <div className='row'>
            <div className='col-md-12'>
                <h1>Here is my API Project</h1>
                <p className='text-justify'>The content below is fetched from <code>'http://react-js.local/imger/results.json'</code>.</p>
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