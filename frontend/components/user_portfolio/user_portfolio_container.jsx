import React from 'react';
import UserProfile from './user_porfolio_page';
import { connect } from 'react-redux'

const mstp = state => ({
    prop1: "a"
})

const mdtp = dispatch => ({
    prop2: "a"
})

export default connect(mstp, mdtp)(UserProfile);