import React from 'react';
import { Link } from 'react-router-dom';
import useScrollTop from '../utils/useScrollTop';


function PageNotFound() {
    useScrollTop();

    return (
        <section className="what-we-do four-fullwidth">
        
        <div className="what-we-do-upper">
            <div className="container">
                <div className="what-we-box">
                    <div className="inner-content">
                        <h3>404</h3>
                        <h1>Page Not Found!</h1>
                        <p>The page you are looking for does not exist. Let's go back <Link to="/">home</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default PageNotFound;
