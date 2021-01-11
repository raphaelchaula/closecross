import React, { FunctionComponent } from 'react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { messages } from '../src/locales/en/messages.js';
import { en } from "make-plural/plurals";
i18n.loadLocaleData("en", { plurals: en });
i18n.load('en', messages);
i18n.activate('en');

const LinguiProvider: FunctionComponent = ({ children }) => {
  return (
    <I18nProvider i18n={i18n}>
      {children}
    </I18nProvider>
  );
};

export default LinguiProvider;
