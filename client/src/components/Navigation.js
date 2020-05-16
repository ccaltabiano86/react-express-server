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
                name: 'React JS Project',
                icon: 'fa fa-rocket'
            },
            {
                link: '/projects/grid-project',
                name: 'Grid Project',
                icon: 'fa fa-picture-o'
            },
            {
                link: '/projects/api-project',
                name: 'React API Project',
                icon: 'fa fa-list-alt'
            },
            {
                link: '/projects/list',
                name: 'Express API Project',
                icon: 'fa fa-cog'
            },
            {
                link: '/projects/blogs-project',
                name: 'MySQL Blogs Project',
                icon: 'fa fa-database'
            },
            {
                link: '/projects/wordpress-project',
                name: 'WordPress API Project',
                icon: 'fa fa-cubes'
            },
            {
                link: '/projects/json-api-project',
                name: 'JSON API Project',
                icon: 'fa fa-bug text-danger'
            },
            {
                link: '/projects/javascript-project',
                name: 'JavaScript Project',
                icon: 'fa fa-coffee'
            }]
        },
        {
            link: '/about', 
            name: 'About',
            submenu: [
                {
                    link: '/about/contact', 
                    name: 'Contact'
                },
                {
                    link: '/about/documentation', 
                    name: 'Documentation'
                }
            ]
        },
        {
            link: 'https://codepen.io/ccaltabiano86', 
            name: 'My Codepen',
            icon: 'fa fa-codepen',
            submenu: []
        },
        {
            link: '/blahblah', 
            name: 'Error 404',
            icon: 'fa fa-warning',
            submenu: []
        }
    ];


    const listItems = menuLinks.map((menuItem, idx) => {
        return(
            <li className="nav-item" key={idx}>
                <a className="nav-link" href={menuItem.link}>
                    {((menuItem.icon) ? <i className={menuItem.icon} aria-hidden="true"></i> : '')}
                    {' '}
                    {menuItem.name}
                </a>
                <ul className="dropdown-menu">
                    {menuItem.submenu.map((submenuItem, i) => { 
                        return(
                            <li key={i} className="dropdown-item">
                                <a className="nav-link" href={submenuItem.link}>
                                    {((submenuItem.icon) ? <i className={submenuItem.icon} aria-hidden="true"></i> : '')}
                                    {' '}
                                    {submenuItem.name}
                                    </a>
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