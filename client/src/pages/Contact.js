import React from 'react';

import useFetch from '../hooks/useFetch';

function Contact() {

    const pages = useFetch('/api/getPages');
    const pageId = 4;
    return (
        <section className='row'>
                {pages && pages
                    .filter((e) => e.id === pageId)
                    .map((page, index) => (
                    <div className='col-md-12' key={index}>
                        <h1>{page.title}</h1>
                        <div dangerouslySetInnerHTML={ { __html:page.body}}/>
                    </div>
                ))}
        </section>
    );

}

export default Contact;