import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import DIRECTORY_DATA from './directory.data';

import './directory.styles.scss';

class Directory extends React.Component {
    state = {
        sections: DIRECTORY_DATA
    }

    render() {
        const { sections } = this.state;

        return (
            <div className="directory-menu">
                {sections.map(({ id, ...sectionProps }) => (
                    <MenuItem key={id} {...sectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory;