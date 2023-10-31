import React from 'react';
import { useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyRouter from './MyRouter/MyRouter';
import store from './store';
import { AppConfigStatic } from './AppConfigStatic';
import AppTopbar from './components/Layouts/AppTopbar';
import AppFooter from './components/Layouts/AppFooter';
import MainLayout from './components/Layouts/MainLayout';
import LoadingWrapper from './MyRouter/wrappers/LoadingWrapper';
import ToastWrapper from './MyRouter/wrappers/ToastWrapper';
import StartupWrapper from './MyRouter/wrappers/StartupWrapper';

import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './assets/layout/layout.scss';
import './assets/mainTheme/mainTheme.css';
import './customStyles.css';

const App = () => {
    const location = useLocation();
    return (
        <Provider store={store}>
            {location.pathname === '/login' ? null : <AppTopbar />}
            <MainLayout>
                <MyRouter />
                <AppFooter />
            </MainLayout>

            <LoadingWrapper />
            <ToastWrapper />
            <StartupWrapper />

            <AppConfigStatic rippleEffect={true} inputStyle={'outlined'} layoutMode={'static'} layoutColorMode={'light'} />
        </Provider>
    );
};

export default App;
