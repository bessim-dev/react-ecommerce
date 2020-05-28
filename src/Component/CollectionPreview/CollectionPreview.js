import React from 'react';
import "./CollectionPreview.scss"
import CollectionItem from '../CollectionItem/CollectionItem';
const CollectionPreview = ({title,items}) => {
    return ( 
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items
                    .filter((item,i)=>(i < 4))
                    .map(({id, ...rest})=>(
                        <CollectionItem key={id} {...rest}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default CollectionPreview;