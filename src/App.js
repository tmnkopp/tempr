import React, {Fragment} from 'react'; 
import SearchBar from './components/layout/SearchBar';
import Templates from './components/templates/Templates';

import './App.css';

function App() {
  return (
    <Fragment>
        <SearchBar></SearchBar>
        <div>
            <Templates></Templates>
        </div>
    </Fragment>
  );
} 
export default App; 