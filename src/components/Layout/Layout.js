import React from 'react';

import Aux from '../../hoc/Auxiliary';
import Wrapper  from '../../hoc/Wrapper';
import Header from '../Header/Header';
import Content from '../Content/Content';

const layout = () => (
    <Aux>
        <Header/>
        <Wrapper>
            <Content/>
        </Wrapper>
    </Aux>
);

export default layout;

