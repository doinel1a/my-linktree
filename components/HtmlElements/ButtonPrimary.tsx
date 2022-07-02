import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IButtonPrimary from '../../interfaces/IButtonPrimary';
import { useStateContext } from '../../contexts/ContextProvider';

import Paragraph from './Paragraph';

const ButtonPrimary: React.FC<IButtonPrimary> = ({ text, icon, url }) => {
    const { isDarkMode } = useStateContext();
    
    return(
        <button 
            type='button'
            className={`
                h-14 flex-shrink-0 border rounded-lg hover:bg-blue-600 focus:bg-blue-600 transition-colors
                ${ isDarkMode ? 'border-white bg-neutral-800' : 'border-[#333] bg-slate-200' } 
            `}
        >
            <a href={ url } target='_blank' rel='noopener' className='flex justify-center items-center' tabIndex={-1}>
                <FontAwesomeIcon
                    icon={ icon }
                    className={` w-8 flex-shrink-0 transition-colors ${ isDarkMode ? 'text-white' : 'text-[#333]' } `}
                />
                <Paragraph text={ text } customCss='w-32' />
            </a>
        </button>
    );
};

export default ButtonPrimary;