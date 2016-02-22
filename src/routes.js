import React from 'react';
import {IndexRoute, Route} from 'react-router';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';

import App from 'containers/App';
import BootSequence from 'containers/BootSequence';
import Desktop from 'containers/Desktop';

import { openWindow } from 'redux/modules/actions';


export default (store) => {
  function onEnterDesktop(nextState, replace) {
    const title = nextState.params.windowTitle || 'Welcome';
    return store.dispatch(openWindow(title));
  }

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path='/' component={App}>
      <IndexRoute component={BootSequence} />

      <Route
        path="/desktop(/:windowTitle)"
        component={Desktop}
        onEnter={onEnterDesktop}
      />
    </Route>
  );
};