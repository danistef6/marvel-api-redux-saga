import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import 'react-toastify/dist/ReactToastify.css'
// pages
import Main from './components/pages/main';
import MainDetail from './components/pages/mainDetail';

// components
// import ToastContainerCO from './components/commons/toast component here ' extra practice
import localeData from './translations'
import './styles/app.scss'

class App extends React.Component {
  render() {
    const { location, lang } = this.props
    console.log("Esto es lo que llega",lang,"******",location);
    const messages = localeData[lang] || localeData.en
    console.log("que trae",messages,"esta variable",localeData[lang]);
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
                component={Main}
              />
              <Route exact path="/Detail/:Id" component={MainDetail} />
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
