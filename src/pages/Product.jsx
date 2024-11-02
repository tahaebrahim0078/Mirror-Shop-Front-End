import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopeContext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../components/breadCrums/breadCrums';
import ProductDisplay from '../components/prodcutDisplay/productDisplay';
import DescriptionBox from '../components/DescriptionBox/descriptionBox';
import RelatedProdcuts from '../components/RelatedProdcuts/relatedProdcuts';

const Product = () => {
    const {all_products} = useContext(ShopContext);
    const {ProductId} = useParams();
    const product = all_products.find((e)=> e.id === Number(ProductId));
    return (
        <div>
            <BreadCrums product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProdcuts/>
        </div>
    );
}

export default Product;
