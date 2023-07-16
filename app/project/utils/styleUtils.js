import { FONT_FAMILY, FONT_WEIGHT } from '../constants';

export const fontStylePicker = (fontFamily, fontWeight) => {
    const style = {};
    if (fontFamily === FONT_FAMILY.POPPINS) {
        switch (fontWeight) {
            case FONT_WEIGHT.THIN:
                style.fontFamily = 'Poppins-Thin';
                break;
            case FONT_WEIGHT.EXTRA_LIGHT:
                style.fontFamily = 'Poppins-ExtraLight';
                break;
            case FONT_WEIGHT.LIGHT:
                style.fontFamily = 'Poppins-Light';
                break;
            case FONT_WEIGHT.NORMAL:
                style.fontFamily = 'Poppins-Regular';
                break;
            case FONT_WEIGHT.MEDIUM:
                style.fontFamily = 'Poppins-Medium';
                break;
            case FONT_WEIGHT.SEMI_BOLD:
                style.fontFamily = 'Poppins-SemiBold';
                break;
            case FONT_WEIGHT.BOLD:
                style.fontFamily = 'Poppins-Bold';
                break;
            case FONT_WEIGHT.EXTRA_BOLD:
                style.fontFamily = 'Poppins-ExtraBold';
                break;
            default:
                break;
        }
    } else if (fontFamily === FONT_FAMILY.NUNITO) {
        switch (fontWeight) {
            case FONT_WEIGHT.EXTRA_LIGHT:
                style.fontFamily = 'Nunito-ExtraLight';
                break;
            case FONT_WEIGHT.LIGHT:
                style.fontFamily = 'Nunito-Light';
                break;
            case FONT_WEIGHT.NORMAL:
                style.fontFamily = 'Nunito-Regular';
                break;
            case FONT_WEIGHT.MEDIUM:
                style.fontFamily = 'Nunito-Medium';
                break;
            case FONT_WEIGHT.SEMI_BOLD:
                style.fontFamily = 'Nunito-SemiBold';
                break;
            case FONT_WEIGHT.BOLD:
                style.fontFamily = 'Nunito-Bold';
                break;
            case FONT_WEIGHT.EXTRA_BOLD:
                style.fontFamily = 'Nunito-ExtraBold';
                break;
            default:
                break;
        }
    }
    return style;
};
