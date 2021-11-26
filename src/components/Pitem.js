import React from 'react';

function Pitem({products}) {
    return (
        <div>
            {products.map((item) => (
                <div key={item.id}>
                <h5>{item.drugname}</h5>
                <button className="btn btn-primary my-2" type="button" data-toggle="collapse" data-target={"#collapse" + item.drugname} aria-expanded="false" aria-controls={"collapse" + item.drugname}>
                    Button with data-target
                </button>
                <div className="collapse" id={"collapse" + item.drugname}>
                <div className="blog-post" key={item.id}>
                        <img src={item.image} alt=""/>
                        <div className="post-content">
                            <h2>{item.drugname}</h2>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">Company</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Composition</th>
                                    <th scope="col">Size</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {item.drugdetails.map((detail)=> (
                                    <tr key={detail.id}>
                                        <th scope="row">{detail.company}</th>
                                        <td>{detail.product}</td>
                                        <td>{detail.composition}</td>
                                        <td>{detail.packsize}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <a href="http://www.europakenya.com/wp-content/uploads/2018/12/Europa-Healthcare-Ltd-Products.pdf" target="_blank" rel="noreferrer">Download our full product catalogue</a>
                        </div>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
    )
    
    // return (
    //     <div>
    //         {products.map((item) => (
    //            <div className="blog-post" key={item.id}>
    //                 <img src={item.image} alt=""/>
    //                 <div className="post-content">
    //                     <h2>{item.drugname}</h2>
    //                     <table className="table table-striped">
    //                         <thead>
    //                             <tr>
    //                             <th scope="col">Company</th>
    //                             <th scope="col">Product</th>
    //                             <th scope="col">Composition</th>
    //                             <th scope="col">Size</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                         {item.drugdetails.map((detail)=> (
    //                             <tr key={detail.id}>
    //                                 <th scope="row">{detail.company}</th>
    //                                 <td>{detail.product}</td>
    //                                 <td>{detail.composition}</td>
    //                                 <td>{detail.packsize}</td>
    //                             </tr>
    //                         ))}
    //                         </tbody>
    //                     </table>
    //                     <a href="http://www.europakenya.com/wp-content/uploads/2018/12/Europa-Healthcare-Ltd-Products.pdf" target="_blank" rel="noreferrer">Download our full product catalogue</a>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>




        
    // )
}

export default Pitem;
