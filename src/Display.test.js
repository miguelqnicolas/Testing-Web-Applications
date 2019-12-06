import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

describe('display', () => {
    test('display component renders balls', () => {
        const {getByText} = render(<Display balls={1}/>);
        const balls = getByText(/balls: 1/i);
        expect(balls).toBeInTheDocument();
    });

    test('display component renders strikes', () => {
        const {getByText} = render(<Display strikes={1}/>);
        const strikes = getByText(/strikes: 1/i);
        expect(strikes).toBeInTheDocument();
    });
});