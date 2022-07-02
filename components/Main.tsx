import Image from 'next/image';
import { v4 as uuid } from 'uuid';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

import IButtonPrimary from '../interfaces/IButtonPrimary';
import { useStateContext } from '../contexts/ContextProvider';

import ButtonPrimary from './HtmlElements/ButtonPrimary';
import Paragraph from './HtmlElements/Paragraph';

import me from '../public/images/me.jpg';

const CTAS: IButtonPrimary[] = [
    {
        text: 'Website',
        icon: faGlobe,
        url: 'https://twitter.com'
    },
    {
        text: 'LinkedIn',
        icon: faLinkedinIn,
        url: 'https://linkedin.com'
    },
    {
        text: 'GitHub',
        icon: faGithub,
        url: 'https://github.com'
    },
    {
        text: 'Twitter',
        icon: faTwitter,
        url: 'https://twitter.com'
    },
    {
        text: 'Mail',
        icon: faEnvelope,
        url: 'mailto:doinel1atanasiu@gmail.com'
    }
];

const Main: React.FC = () => {
    const { isDarkMode } = useStateContext();

    return(
        <main className={` w-full max-w-3xl flex flex-col p-3 transition-colors ${ isDarkMode ? 'bg-neutral-700' : 'bg-slate-100' } `}>
            <section className='flex flex-col flex-shrink-0 justify-between items-center gap-y-6'>
                <div className='w-[180px] h-[180px] flex justify-center items-center rounded-full bg-blue-600 p-1'>
                    <Image
                        src={ me }
                        width={ 298 }
                        height={ 298 }
                        className='rounded-full'
                        alt="Doinel's photo"
                    />
                </div>
                <div className='flex flex-col items-center flex-shrink-0 gap-y-1'>
                    <Paragraph text='NEVER STOP BUIDLING.' customCss='text-lg font-light' />
                    <Paragraph text='Doinel Atanasiu' customCss='text-2xl font-bold' />
                    <Paragraph text='Full Stack Dev' customCss='text-2xl font-bold' />
                </div>
            </section>
            <section className='flex flex-col gap-y-6 my-8'>
                {
                    CTAS.map( _cta => (
                        <ButtonPrimary
                            key={ uuid() }
                            text={ _cta.text }
                            icon={ _cta.icon }
                            url={ _cta.url }
                        />
                    ))
                }
            </section>
        </main>
    );
};

export default Main;