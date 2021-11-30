import React, {useState} from 'react'
import ProductItem from './ProductItem';
import products from '../assets/data';


function ProductBox() {
	//State
	//Search component
	//Read search
	//filter products
	//add products to state
	//push new products to productItems

	const [searchField, setSearchField] = useState("");
	const [productItems, setProductItems] = useState(products);

	const handleChange = (event) => {
		let value = event.target.value;
		if(!value) {
			setProductItems(products);
			setSearchField("")
			return;
		}
		setSearchField(value);
		searchProduct(searchField);
		
	}

	const handleClick = (event) => {
		event.preventDefault();
		let value = event.target.value
		if(!value) {
			setProductItems(products);
			setSearchField("")
			return;
		}
		setSearchField(value);
		searchProduct(searchField);
	}

	const searchProduct = (searchField) => {
		const result = productItems.filter((product) => 
			product.drugname.toLowerCase().includes(searchField.toLowerCase())
		);

		setProductItems(result);
	}



    return (
        <section className="blog-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						
						<div className="sidebar">
							<div className="search-widget widget">
								<form>
									<input type="search" placeholder="search products..." onChange={(e) => handleChange(e)} value={searchField}/>
									<button type="submit" onClick={(e) => handleClick(e)}>
										<i className="fa fa-search"></i>
									</button>
								</form>
							</div>
							<div className="text-widget widget">
								<h2>Product Catalogue</h2>
								<p>A list of our products from our partner manufacturers.</p>
							</div>
  							<div className="category-widget widget">
								<h2>Catalogues</h2>
								<ul className="category-list">
									<li>Products</li>
									<li>Manufacturers</li>
								</ul>
							</div>
						</div>

					</div>
					<div className="col-lg-8">
					<div className="title-section">
						<h1>Products</h1>
						<p>Click on each to learn more.<br/>Feel free to contact us with more questions </p>
					</div>
						<div className="blog-box">

							<ProductItem products={productItems}/>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default ProductBox
