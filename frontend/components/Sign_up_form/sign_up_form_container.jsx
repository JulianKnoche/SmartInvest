import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import { signup } from '../../actions/session_actions'

const mstp = state => ({
    errors: Object.values(state.errors.session),
    formType: 'signup'
})

const mdtp = dispatch => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mstp, mdtp)(SignUpForm);