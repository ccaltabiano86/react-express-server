import React, { Component } from 'react';

class Contents extends Component {
// Initialize the state
constructor(props){
    super(props);
    this.state = {
        pages: []
    }
}

// Fetch the list on first mount
componentDidMount() {
    this.getPages();
}

// Retrieves the data from db (Remember to run async!)
getPages = async () => {
    //fetch('/api/getPages')
    fetch('/api/getPages')
    .then(res => res.json())
    .then(pages => this.setState({ pages }))
}


    render() {
        const { pages } = this.state;
        let pageId;
        const Contents = () => (
            <section>
                {pages.length ? (
                    <div className='col-md-12'>
                        {pages
                        .filter((e) => e.id === pageId )
                        .map((page, key) => {
                        return(
                            <div key={key}>
                                <h2>{page.title}</h2>
                                <div dangerouslySetInnerHTML={ { __html:page.body}}/>
                            </div>
                        );
                        })}
                    </div>
                ) : (
                    <div className='col-md-12'>
                        <p>Page Not Found</p>
                    </div>
                )}
            </section>
        )
        return (
            <Contents/>
        );
    }
  }
  
  export default Contents;