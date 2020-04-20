import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

const ExamplePage = ({title, intl: { formatMessage },}) => <div> <h1>Marvel api here </h1> <h2>{title}</h2> <h3> { 

   formatMessage({
    id: 'dashboard.characters',
  })}
  </h3> </div>


ExamplePage.propTypes = {}
  
const mapStateToProps = state => ({
    title: state.books.title,
})
  
const reduxState = connect(mapStateToProps, {})
  
export default compose(injectIntl, reduxState)(ExamplePage)