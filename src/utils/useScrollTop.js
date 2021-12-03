import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const useScrollTop = () => {
    const location = useLocation();
        
    useEffect(() => {
        window.scrollTo({ top: 0 });
        // window.location.reload();
    }, [location])

};

export default useScrollTop;