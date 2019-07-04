import React from 'react';

function ExternalLink(props){
    return (
        <a className="ExternalLink" href={props.href}>
            <i className={"icon " + props.icon}></i>
            {props.val}
        </a>
    )
}
function Header(){
    return (
        <div className="Header">
            <div className="name">
                Abdul Bahajaj 
                    <div className="links">
                        |
                        <ExternalLink icon="fab fa-github-square" href="https://github.com/abdulbahajaj" val=""/>
                        <ExternalLink icon="fab fa-linkedin-in" href="https://www.linkedin.com/in/abdul-bahajaj-016a9337" val=""/>
                    </div>
            </div>
            <div className="description">
                This blog is the world's most trusted authority on programming, technology and life in general
                <br/>
                The views expressed in this blog don't necessary reflect anyone's opinion
            </div>
        </div>
    )
}

export default Header;
