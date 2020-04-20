import React from 'react';

import useFetch from '../../components/hooks/useFetch';

function Documentation() {

    const pages = useFetch('/api/getPages');
    //const pageId = 5;
    const pagePath = '/about/documentation';
    return (
        <section className='row'>
            {pages && pages
                //.filter((e) => e.id === pageId)
                .filter((e) => e.path === pagePath)
                .map((page, index) => (
                <div className='col-md-12' key={index}>
                    <h1>{page.title}</h1>
                    <div dangerouslySetInnerHTML={ { __html:page.body}}/>
                </div>
            ))}
        </section>
    );

}

export default Documentation;