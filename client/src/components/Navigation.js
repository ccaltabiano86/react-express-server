import React from 'react';
import logo from '../logo.svg';

function changeState(e) {
    if(localStorage.getItem('background') !== 'bg-light'){
    localStorage.setItem('background','bg-light');
    }else{
        localStorage.setItem('background','bg-dark');
    }
    //console.log('state changed');
}


function navbarNavToggle() {
    const element = document.getElementById("navbarNav");
    if (element.classList.contains("show")) {
        element.classList.remove("show"); 
    } else {
       element.classList.add("show"); 
    }
}

function getElementsByClassName(node,classname) {
    if (node.getElementsByClassName) {
        return node.getElementsByClassName(classname);
    }
}

function dropdownFix() {
    var parentDivs = getElementsByClassName(document, "dropdown-menu"); 
    for(let i=0; i<parentDivs.length; i++)
    {
        var children = getElementsByClassName(parentDivs[i], "dropdown-item");
        //console.log(parentDivs[i])
        if(!children || children.length === 0)
        {
            parentDivs[i].style.display = "none";
            //parentDivs[i].remove();
        }
    }
}

function Navigation(props) {

    const menuLinks = [
        {
            link: '/', 
            name: 'Home',
            submenu: []
        },
        {
            link: '/projects', 
            name: 'Projects',
            submenu: [{
                link: '/projects/react-project',
                name: 'React JS Project'
            },
            {
                link: '/projects/grid-project',
                name: 'Grid Project'
            },
            {
                link: '/projects/api-project',
                name: 'React API Project'
            },
            {
                link: '/projects/list',
                name: 'Express API Project'
            },
            {
                link: '/projects/blogs-project',
                name: 'MySQL Blogs Project'
            },
            {
                link: '/projects/wordpress-project',
                name: 'WordPress API Project'
            }]
        },
        {
            link: '/about', 
            name: 'About',
            submenu: []
        },
        {
            link: '/contact', 
            name: 'Contact',
            submenu: []
        },
        {
            link: 'https://codepen.io/', 
            name: 'External Link Test',
            submenu: []
        },
        {
            link: '/blahblah', 
            name: 'Error 404',
            submenu: []
        }
    ];


    const listItems = menuLinks.map((menuLink, idx) => {
        return(
            <li className="nav-item" key={idx}>
                <a className="nav-link" href={menuLink.link}>{menuLink.name}</a>
                <ul className="dropdown-menu">
                    {menuLink.submenu.map((submenuItem, i) => { 
                        return(
                            <li key={i} className="dropdown-item">
                                <a className="nav-link" href={submenuItem.link}>{submenuItem.name}</a>
                                </li>
                        )
                    })
                    }
                </ul>
            </li>
        )
    });

    return(
        <nav className={props.className} onLoad={dropdownFix}>
            <img src={logo} className="navbar-brand App-logo" alt="logo" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={navbarNavToggle}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    {listItems}
                </ul>
                <form className="form-inline">
                    <button className="btn btn-primary btn-block" onClick={changeState}>Switch <i className={(localStorage.getItem('background') === 'bg-light') ? "fa fa-toggle-on" : "fa fa-toggle-off"} aria-hidden="true"></i></button>
                </form>
            </div>
        </nav>
    );
}


export default Navigation;