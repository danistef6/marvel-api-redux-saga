import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import 'react-toastify/dist/ReactToastify.css'
// pages
import PageNotFound from './components/pages/pageNotFound'
import ExamplePage from './components/pages/examplePage/examplePage'

// components
// import ToastContainerCO from './components/commons/toast component here ' extra practice
import localeData from './translations'
import './styles/app.scss'

class App extends React.Component {
  render() {
    const { location, spinner, lang } = this.props
    const messages = localeData[lang] || localeData.en
    return (
      <div>
        {/* {spinner && <Loading  />}  // extra practice create a Loading component general  */} 
        <IntlProvider locale={lang} messages={messages}>
          <div>
            <Switch>
              <Route
                location={location}
                path="/"
                exact
                component={ExamplePage}
              />
              <Route component={PageNotFound} />
            </Switch>
            {/* <ToastContainerCO className="toast-container" />  extra practice create a toast componete to feedback */}
          </div>
        </IntlProvider>
      </div>
    )
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  lang: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  lang: state.locale.lang,
  globalAlert: state.globalAlert,
  spinner: state.generalSpinner.fetching,
})

const reduxState = connect(mapStateToProps, {})

export default compose(withRouter, reduxState)(App)
