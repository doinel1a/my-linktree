import { useStateContext } from '../contexts/ContextProvider';

import Paragraph from './HtmlElements/Paragraph';

const Footer: React.FC = () => {
    const { isDarkMode } = useStateContext();

    return(
        <footer className={` w-full h-10 flex justify-center items-center border-t transition-colors ${ isDarkMode ? 'bg-neutral-900' : 'bg-slate-300' } `}>
            <Paragraph text='© 2022 — D1A' customCss='cursor-default' />
        </footer>
    );
};

export default Footer;