// eslint-disable-next-line import/no-extraneous-dependencies
import * as Keychain from 'react-native-keychain';

export const HOSTNAME = 'http://localhost:8080';

export const setSession = async (session) => {
    const rawValue = JSON.stringify(session);
    await Keychain.setGenericPassword('session', rawValue);
};

export const getSession = async () => {
    const credential = await Keychain.getGenericPassword();
    let session;
    if (credential) {
        session = JSON.parse(credential.password);
    }
    return session;
};

export const clearSession = async () => {
    await Keychain.resetGenericPassword();
}
