import React from 'react';

import Aux from '../../hoc/Auxiliary';
import Wrapper  from '../../hoc/Wrapper';
import Header from '../Header/Header';

const layout = (props) => (
    <Aux>
        <Header/>
        <Wrapper>
            <div>Header, Nav, Ads, Featured, Service dir</div>
            <main>
                {props.children}
            </main>
        </Wrapper>
    </Aux>
);

export default layout;

