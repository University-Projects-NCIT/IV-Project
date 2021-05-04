import { useEffect } from 'react'
import { connect } from 'react-redux'
import {checkAuthenticated, load_user} from '../actions/auth.action'

const Layout = ({ checkAuthenticated, load_user, children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
