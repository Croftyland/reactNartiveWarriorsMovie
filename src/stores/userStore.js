import { observable, action, computed } from 'mobx';
import { Actions } from 'react-native-router-flux';
import CallApi from '../api/api';

class UserStore {
    @observable user = {};

    @observable session_id = {};

    @observable showLoginModal = false;


    @computed get isAuth() {
        return Boolean(Object.keys(this.user).length);
    }

    @action
    toggleLoginButton = () => {
        Actions.login();
    };

    @action
    updateAuth = (user, session_id) => {
        this.user = user;
        this.session_id = session_id;
    };

    @action
    updateUser = (user) => {
        this.user = user;
    };

    @action
    updateSessionId = (session_id) => {
        this.session_id = session_id;
    };

    @action
    getUser = () => {
        this.isLoading = true;
        const session_id = 'cookies';
        if (session_id) {
            CallApi.get('/account', {
                params: {
                    session_id,
                },
            }).then((user) => {
                this.updateAuth(user, session_id);
            });
        }
    };

    @action
    onLogout = () => {
        CallApi.delete('/authentication/session', {
            body: {
                session_id: this.session_id,
            },
        }).then((data) => {
            this.user = {};
            this.session_id = {};
        });
    };

}

export const userStore = new UserStore();