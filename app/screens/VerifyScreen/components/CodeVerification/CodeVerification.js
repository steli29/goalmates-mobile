import React, { useState } from 'react';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import CodeDigitBox from '../CodeDigitBox/CodeDigitBox';

const CodeVerification = () => {
    const CELL_COUNT = 6;
    const [value, setValue] = useState('');
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

export default CodeVerification;
