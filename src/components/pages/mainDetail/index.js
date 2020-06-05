import React from 'react';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import Detail from '../Detail';
import { addDetailRequest} from '../../../actions/actionsDetail';

const Main = ({handleSearchComics}) => (
    <>
        <Detail handleSearchComics={handleSearchComics} />
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
      handleSearchComics: addDetailRequest,
    }
  )
  
  export default compose(reduxState)(Main)