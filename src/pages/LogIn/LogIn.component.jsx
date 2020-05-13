import React from 'react';

import { connect } from 'react-redux';

import { userActions } from '../../redux/actions/user.actions';

import CustomButton from '../../components/custom-button/custom-button.component';
import { LogInLinkContainer } from './Login.styles';
import CustomForm from '../../components/custom-form/custom-form.component';
import FormInput from '../../components/form-input/form-input.component'

class LogIn extends React.Component {
    
    constructor(props) {
        super(props);

        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => console.log());
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }
    
    render () {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <CustomForm onSubmit={this.handleSubmit}>
                <FormInput 
                    type='email' 
                    placeholder='e-mail' 
                    name="username"
                    value={username}
                    onChange={this.handleChange} 
                />
                <FormInput 
                    type='password' 
                    placeholder='hasło'
                    name="password"
                    value={password} 
                    onChange={this.handleChange}
                />
                <CustomButton type="submit"> Zaloguj </CustomButton>
                <LogInLinkContainer to="/#">Przypomnij hasło</LogInLinkContainer>
                <LogInLinkContainer to="/registration">Zarejestruj się</LogInLinkContainer>                
            </CustomForm>
        )
    }
}
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(LogIn);