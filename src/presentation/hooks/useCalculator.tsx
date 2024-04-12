/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { isValidCharacter, isFirstValue }  from '../utils/validation';
import { Operator } from '../enum/Operator';
import { createOperation, resolveOperation } from '../utils/operation';

export const useCalculator = () => {

    const [ number, setNumber ] = useState('0');
    const [ mainResult, setMainResult ] = useState('');
    const [ subResult, setSubResult ] = useState('0');

    const lastOperation = useRef<Operator>();

    useEffect( () => {
        if ( lastOperation.current ) {
            const operacion = `${ createOperation( mainResult, number, lastOperation.current ) }`;
            const resultado = `${ resolveOperation(mainResult) }`;
            setMainResult( operacion );
            setSubResult( resultado );
            
            switch ( lastOperation.current ) {
                case Operator.ADD || Operator.SUBSTRACT:
                    setMainResult( `${ createOperation( resultado, number, lastOperation.current ) }` );
                    return;

                case Operator.MULTIPLY || Operator.DIVIDE:
                    //TODO: Pre construir formula
                    return;

                case Operator.EQUAL:
                    lastOperation.current = undefined;
                    setNumber(resultado);
                    return;
            }

            return;
        }
        setMainResult( number );
    }, [ number ] );
    
    useEffect(() => {
        if ( lastOperation.current ) {
            switch ( lastOperation.current ) {
                case Operator.ADD || Operator.SUBSTRACT:
                    setSubResult(`${ resolveOperation(mainResult) }`);
                    return;

                case Operator.MULTIPLY || Operator.DIVIDE:
                    return;

                case Operator.EQUAL:
                    setSubResult('');
                    return;
            }
        }
      }, [ mainResult ]);

    const buildNumber = ( numberValue: string ): void => {

        // Valida los valores del numero
        if ( !isValidCharacter( number , numberValue )) return;

        // Valida que sea el primer caracter
        if ( isFirstValue( number , numberValue) ) return setNumber( numberValue );

        setNumber( number  + numberValue );
    };

    const clean = (): void => {
        setNumber('0');
        setMainResult('0');
        setSubResult('');
        lastOperation.current = undefined;
    };

    const deleteCharacter = (): void => {
        // No permite borrar el primer 0
        if ( mainResult.length <= 1 ) return setNumber('0');
        return setMainResult( mainResult.slice(0, -1) );
    };

    const toggleSign = (): void => {
        if ( mainResult.includes( '-' ) ) return setMainResult( mainResult .replace( '-', '' ))
            setNumber( '-' + mainResult );
    };

    const setLastNumber = (): void => {
        // Valida que el valor no termine con punto y lo quita
        if ( number.endsWith('.')) setSubResult( number.slice(0, -1) );
        else setSubResult( number );
    };

    const signOperation = ( operator: Operator ): void => {
        lastOperation.current = operator;
        setLastNumber();
        setNumber('0');
    };

    return {
        // Properties
        mainResult ,
        subResult,

        // Methods
        buildNumber,
        clean,
        toggleSign,
        deleteCharacter,
        signOperation,
    };
};
