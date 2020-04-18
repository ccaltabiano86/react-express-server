import React from 'react';

function Home() {

    return(
        <section className='row'>
            <div className='col-md-12'>
                <h1>Welcome to Christian's Raspberry Pi React App!</h1>
                <p>I have build this site using <code>npm</code> and the build function <code>npx create-react-app</code>. The purpose of this site is to test out <code>react.js</code> and get a better understanding of how to develop in React.</p>
                <p>I have integrated <code>react-bootstrap</code> for ease of styling and <code>react-router-dom</code> to have a multipage app.</p>
                <p>The next step in to integrate MongoBd so I can dynamically change the content of the app.</p>
            </div>
        </section>
    );
}

export default Home;