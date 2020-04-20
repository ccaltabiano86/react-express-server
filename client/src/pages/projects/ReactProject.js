import React from 'react';

import useFetch from '../../components/hooks/useFetch';

function ReactProject() {

    const pages = useFetch('/api/getPages');
    //const pageId = 3;
    return (
        <section className='row'>
            <div className='col-md-12'>
                <h1>React JS Project</h1>
                {pages && pages
                    //.filter((e) => e.id === pageId)
                    .map((page, index) => (
                    <a key={page.id} className="list-group-item" href={`${page.path}`}>
                        <li className="d-flex justify-content-between align-items-center">
                            {page.title}
                            <span className="badge badge-primary badge-pill">ID: {page.id}</span>
                        </li>
                    </a>
                ))}
            </div>
        </section>
    );

}

export default ReactProject;