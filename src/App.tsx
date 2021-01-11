import React, { FunctionComponent } from 'react';
import DashboardPage from './pages/dahsboard';
import './App.css';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { messages } from '../src/locales/en/messages.js';
import { en } from "make-plural/plurals";
i18n.loadLocaleData("en", { plurals: en });
i18n.load('en', messages);
i18n.activate('en');

const App: FunctionComponent = () => {
  return (
    <I18nProvider i18n={i18n}>
      <DashboardPage/>
    </I18nProvider>
  );
};

export default App;
