import React from 'react';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import List from '../List';
import Header from '../Header';
import FilterBar from '../FilterBar';
import { addComicsRequest} from '../../../actions/actions';
import { setLocale} from '../../../actions/locale';

const Main = ({handleSearchComics, comics, handleSetLocale}) => (
    <>
        <FilterBar handleSearchComics={handleSearchComics} handleSetLocale={handleSetLocale} />
        <Header />
        <List comics ={comics}/>
    </>
);

function mapStateToProps(state) {
    return {
        comics: state.comics
    }
  }
  
  const reduxState = connect(
    mapStateToProps,
    {
      handleSearchComics: addComicsRequest,
      handleSetLocale: setLocale,
    }
  )
  
  export default compose(reduxState)(Main)
