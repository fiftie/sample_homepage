import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import LandingPageContainer from 'pages/landingPage/_containers/LandingPageContainer';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={LandingPageContainer} />
    </div>
  </BrowserRouter>
)

export default Router