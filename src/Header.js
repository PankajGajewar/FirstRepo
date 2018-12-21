import React, {Component} from 'react';

class Header extends Component {
    render(){
        return (
            <div>
                <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                <a className="p-2 text-muted" href="a">World</a>
                <a className="p-2 text-muted" href="a">U.S.</a>
                <a className="p-2 text-muted" href="a">Technology</a>
                <a className="p-2 text-muted" href="a">Design</a>
                <a className="p-2 text-muted" href="a">Culture</a>
                <a className="p-2 text-muted" href="a">Business</a>
                <a className="p-2 text-muted" href="a">Politics</a>
                <a className="p-2 text-muted" href="a">Opinion</a>
                <a className="p-2 text-muted" href="a">Science</a>
                <a className="p-2 text-muted" href="a">Health</a>
                <a className="p-2 text-muted" href="a">Style</a>
                <a className="p-2 text-muted" href="a">Travel</a>
                </nav>
            </div>
            </div>
        );
    }
}

export default Header;
