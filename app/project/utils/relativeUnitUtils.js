import { Dimensions } from 'react-native';

export const getRelativeUnits = (baseSize = 360) => {
    const dimensions = Dimensions.get('window');
    return {
        vw: dimensions.width / 100,
        vh: dimensions.height / 100,
        bp: dimensions.width / baseSize,
        sc: dimensions.scale,
    };
};

export const bp = (size) => {
    const { bp: bpUnit } = getRelativeUnits();

    return size * bpUnit;
};