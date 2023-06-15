import { render, screen } from '@testing-library/react';
import React from 'react';
import { Hola } from './prueba';

describe('App tests', () => {
    it('should contains the heading 1', () => {
        render(<Hola />);
        const heading = screen.getByText(/Hello, World!/i);
        expect(heading).toBeInTheDocument()
    });
});