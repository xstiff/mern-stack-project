export const Required = ({ val }) => {
    if ( val && val.length > 2 ) return true;
    return false;

}

export const SpecifyLenght = ({val, min = 2, max}) => {
    if (val.length >= min && val.length <= max) return true;
    return false;
}

export const OnlyLatin = ({val}) => {
    return !!val.toLowerCase().match(/^[a-z]*$/i);
}
