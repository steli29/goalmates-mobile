import React from 'react';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PropTypes from 'prop-types';

import CodeDigitBox from '../CodeDigitBox/CodeDigitBox';

const CodeVerification = ({ value, setValue}) => {
    const CELL_COUNT = 6;
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            carretHidden={false}
            keyboardType='number-pad'
            textContentType='oneTimeCode'
            renderCell={({ index, symbol, isFocused }) => (
                <CodeDigitBox
                    key={index}
                    symbol={symbol || (isFocused ? <Cursor /> : null)}
                    onLayout={getCellOnLayoutHandler(index)}
                />
            )}
        />
    );
};

CodeVerification.propTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func,
};

export default CodeVerification;
