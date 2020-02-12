import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import { signup } from '../../actions/session_actions'

const mstp = state => ({
    // user: {
    //     first_name: "",
    //     last_name: "",
    //     email: "",
    //     password: "",
    //     // buying_power: 0,
    // },
    formType: 'signup'
})

const mdtp = dispatch => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mstp, mdtp)(SignUpForm);