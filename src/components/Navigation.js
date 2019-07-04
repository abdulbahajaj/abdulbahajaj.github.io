import React from 'react';
function Article(props){
    return (
        <div className="article">
            <div className="title">
                {props.title}
            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
    )
}

function Empty(){
    return (
        <div className="Empty">
            <i className="fas fa-book-open icon"></i>
            None of my wisdom is shared here. YET!
        </div>
    )
}

function Navigation(){
    return (
        <div className="Navigation">
            <Empty/>
        </div>
    )
}

export default Navigation;
