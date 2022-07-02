import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Home: NextPage = () => {
    return(
        <div className='w-screen min-h-screen flex flex-col items-center justify-center'>
            <Head>
                <title>Doinel Atanasiu — Quick Links</title>

                {/* Generics */}
                <link rel='icon' href='/favicon/favicon-32.png' sizes='32x32' />
                <link rel='icon' href='/favicon/favicon-57.png' sizes='57x57' />
                <link rel='icon' href='/favicon/favicon-76.png' sizes='76x76' />
                <link rel='icon' href='/favicon/favicon-96.png' sizes='96x96' />
                <link rel='icon' href='/favicon/favicon-128.png' sizes='128x128' />
                <link rel='icon' href='/favicon/favicon-192.png' sizes='192x192' />
                <link rel='icon' href='/favicon/favicon-228.png' sizes='228x228' />

                {/* Android */}
                <link rel='shortcut icon' sizes='196x196' href='/favicon/favicon-196.png' />

                {/* iOS */}
                <link rel='apple-touch-icon' href='/favicon/favicon-120.png' sizes='120x120' />
                <link rel='apple-touch-icon' href='/favicon/favicon-152.png' sizes='152x152' />
                <link rel='apple-touch-icon' href='/favicon/favicon-180.png' sizes='180x180' />
            </Head>

            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;