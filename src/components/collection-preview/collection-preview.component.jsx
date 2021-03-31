import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
    const filtered = items.filter((item, index) => index < 4);

    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {filtered.map(({ id, ...itemProps }) => (
                    <CollectionItem key={id} {...itemProps} />
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview;