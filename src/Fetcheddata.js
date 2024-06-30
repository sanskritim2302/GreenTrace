import React, { useState } from 'react';

function Fetcheddata(props) {
    const { data } = props;
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(data.Sheet1.map(product => product.Product))];

    const filteredProducts = selectedCategory === 'All' 
        ? data.Sheet1 
        : data.Sheet1.filter(product => product.Product === selectedCategory);

    return (
        <>
            <div className='container'>
                <h1>All Products</h1>
                <div className='category-buttons'>
                    {categories.map(category => (
                        <button 
                            key={category} 
                            className={category === selectedCategory ? 'active' : ''}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className='product-grid'>
                    {filteredProducts.map((d) => {
                        return (
                            <div className='product-tile' key={d.Product_Name}>
                                <div className='product-image'>
                                    <img src={d.Product_Img} alt={d.Product_Name} />
                                </div>
                                <div className='product-description'>
                                    <h2>{d.Product_Name}</h2>
                                    <p><a href={d.Product_Link} target="_blank" rel="noopener noreferrer">Product Link</a></p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                </div>
        </>
    );
}

export default Fetcheddata;