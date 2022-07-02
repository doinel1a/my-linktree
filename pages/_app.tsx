import type { AppProps } from 'next/app';

import { ContextProvider } from '../contexts/ContextProvider';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
    return(
        <ContextProvider>
            <div className='w-screen min-h-screen flex flex-col items-center justify-center'>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </ContextProvider>
    );
};

export default App;