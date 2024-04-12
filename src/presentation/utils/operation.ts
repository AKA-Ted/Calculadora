
import { Operator } from '../enum/Operator';

export const createOperation = (mainResult: string, number: string, operator?: Operator,  ): string => {
    const formula = mainResult;
    const firstFormulaPart = formula.split(' ').at(0);
    if ( operator && operator === Operator.EQUAL) {
        return mainResult;
    }
    return `${ firstFormulaPart } ${ operator } ${ number }`;

};


export const resolveOperation = (mainResult: string): number => {
    const [ firstValue, operator, secondValue] = mainResult.split(' ');
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if ( isNaN( num2 ) ) return num1;

    switch ( operator ) {

        case Operator.ADD:
            return  (num1 + num2 );

        case Operator.SUBSTRACT:
            return  (num1 - num2 );

        case Operator.MULTIPLY:
            return  (num1 * num2 );

        case Operator.DIVIDE:
            return  (num1 / num2 );

        default:
            throw new Error(' Opration not implemented');
    }
};
