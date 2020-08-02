import React from 'react';

import CreateFunctionalComponent from './task1/CreateFunctionalComponent';
import CreatePureComponent from './task1/CreatePureComponent';
import CreateComponent from './task1/CreateComponent';
import CreateElement from './task1/CreateElement';

const App = () => (<div>
    <CreateFunctionalComponent />
    <CreatePureComponent />
    <CreateComponent />
    {CreateElement}
</div>)

export default App;