import { Platform } from 'react-native';

export default {
    SF_PRO_TEXT: {
        ...Platform.select({
            ios: {

                Spectral: {
                    Bold: 'Spectral-Bold',
                    Light: 'Spectral-Light',
                    Regular: 'Spectral-Regular',
                    SemiBold: 'Spectral-SemiBold',
                    Medium: 'Spectral-Medium',
                    ExtraBold: 'Spectral-ExtraBold',
                },
                inter: {
                    Black: 'Inter-Black',
                    Bold: 'Inter-Bold',
                    ExtraBold: 'Inter-ExtraBold',
                    Light: 'Inter-Light',
                    Medium: 'Inter-Medium',
                    Regular: 'Inter-Regular',
                    SemiBold: 'Inter-SemiBold',
                    Thin: 'Inter-Thin'
                },

            },
            android: {
                Spectral: {
                    Bold: 'Spectral-Bold',
                    Light: 'Spectral-Light',
                    Regular: 'Spectral-Regular',
                    SemiBold: 'Spectral-SemiBold',
                    Medium: 'Spectral-Medium',
                    ExtraBold: 'Spectral-ExtraBold',
                },
                inter: {
                    Black: 'Inter-Black',
                    Bold: 'Inter-Bold',
                    ExtraBold: 'Inter-ExtraBold',
                    Light: 'Inter-Light',
                    Medium: 'Inter-Medium',
                    Regular: 'Inter-Regular',
                    SemiBold: 'Inter-SemiBold',
                    Thin: 'Inter-Thin'
                },

            },
        }),
    },
};

const MOB_TAB_RATIO = 1.4;
export const fontWeight = (weight) => {
    let size = isPAD ? Math.floor(weight * MOB_TAB_RATIO) : weight;
    return size;
};