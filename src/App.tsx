import React, { FunctionComponent } from 'react';
import './App.css';
import Header from './layouts/main/header/index';
import { i18n } from '@lingui/core';
import { Trans } from '@lingui/macro';
import { I18nProvider } from '@lingui/react';

import { messages } from '../src/locales/en/messages.js';
import { en } from "make-plural/plurals";
i18n.loadLocaleData("en", { plurals: en });
i18n.load('en', messages);
i18n.activate('en');

const App: FunctionComponent = () => {
  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <Header/>
      </div>
    </I18nProvider>
  );
};

export default App;
