import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { useStateContext } from '../contexts/ContextProvider';

import Paragraph from './HtmlElements/Paragraph';

const Header: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useStateContext();

    return(
        <header className={` w-full h-14 sticky top-0 z-10 flex justify-center border-b transition-colors ${ isDarkMode ? 'bg-neutral-900' : 'bg-slate-300' } `}>
            <div className='w-full max-w-3xl h-full flex justify-between items-center px-3'>
                <Paragraph text='D1A' customCss='logo flex-shrink-0' />
                <button
                    type='button'
                    aria-label='Theme handler'
                    className='rounded-full cursor-pointer hover:bg-white focus:bg-white bg-opacity-0 p-2'
                    onClick={ (_e) => { setIsDarkMode(!isDarkMode); _e.currentTarget.blur(); } }
                >
                    <FontAwesomeIcon 
                        icon={ isDarkMode ? faSun : faMoon }
                        className={ `w-8 ${ isDarkMode ? 'text-amber-200' : 'text-amber-500' }` }
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;