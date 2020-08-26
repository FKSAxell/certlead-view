import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import { Spin } from 'antd'
import HomePage from "./views/HomePage"
import Error404 from "./views/Error404"
import CertificadosPage from "./views/CertificadosPage"

const App = ({ history }) => {
  return (
    <Suspense fallback={<FallbackView />}>
      <BrowserRouter history={history}>
        
        <Switch>
          <Route path='/certlead-view' component={HomePage} exact />
          <Route path='/certificados' component={CertificadosPage} exact />
          <Route path="/*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

function FallbackView(props) {
  return (
    <div className='fallback-container'>
      <Spin style={{fontSize: '32px'}}/>
    </div>
  )
}

export default App;
