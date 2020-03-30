// utils/withAuth.js - a HOC for protected pages
import React, {Component} from 'react'
import AuthService from './AuthService'
import Router from 'next/router'
import { Spinner } from 'reactstrap';

export default function withAuth(AuthComponent) {

    const Auth = new AuthService('https://etl-auth.herokuapp.com/api/v1/auth')

    return class Authenticated extends Component {
        constructor(props) {
            super(props)
            this.state = {
                isLoading: true
            };
        }

        componentDidMount() {
            if (!Auth.loggedIn()) {
                console.log('bad')
                return Router.push('/login');
            }
            this.setState({isLoading: false})
        }

        render() {
            return (
                <div>
                    {this.state.isLoading ? (
                        <div>
                            LOADING....
                            <Spinner size="sm" color="secondary" />

                        </div>
                    ) : (
                        <AuthComponent {...this.props} auth={Auth}/>
                    )}
                </div>
            )
        }
    }
}