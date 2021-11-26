import React from 'react';

function ProductItem({products}) {
    return (
        <div>
            {products.map((item) => (
                <div key={item.id} className="accordion" id="product-accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={"#collapse" + item.drugname}  aria-expanded="true" aria-controls={"collapse" + item.drugname}>
                                {item.id + ". " + item.drugname}
                                </button>
                            </h2>
                        </div>
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
                </div>
                ))}
        </div>
    )
}

export default ProductItem;
