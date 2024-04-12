
export const isValidCharacter = ( value: string, buttonValue: string): boolean => {
    if ( !isDecimalMark( value, buttonValue ) )  return false;
    if ( !isValidValue( value, buttonValue ) ) return false;

    return true;
};

export const isFirstValue = ( value: string, buttonValue: string ): boolean => {
    if (value.startsWith('0') ) {
        if ( buttonValue !== '0' && buttonValue !== '.' && !value.includes( '.' ) )  return true;
    }
    return false;
};

const isDecimalMark = ( value: string, buttonValue: string ): boolean => {
    if ( value.includes('.') && buttonValue === '.' ) return false;
    return true;
};

const isValidValue = (  value: string, buttonValue: string ): boolean => {
    if ( value.startsWith('0') || buttonValue.startsWith('-0')) {
        if ( buttonValue === '0' && !value.includes('.')) return false;
    }
    return true;
};
