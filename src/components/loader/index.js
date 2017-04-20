import React from 'react';

const styles = {
    loader: {
        width: '20px'
    }
};

export function Loader () {
    return (
        <img style={ styles.loader }
             src="https://portal.smartdooranddelivery.com/wp-content/themes/SDD-Child-Theme/images/loader.svg" />
    );
}
