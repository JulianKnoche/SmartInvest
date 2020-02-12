import { connect } from 'react-redux';
import SignInForm from './sign_in_form';
import { login } from '../../actions/session_actions';

const mstp = state => ({
    formType: 'signIn'
})

const mdtp = dispatch => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(mstp, mdtp)(SignInForm);