import { render, screen, fireEvent } from '@testing-library/react';
import Post from '../index';
import React from 'react';
test('Deve adicionar dois comentários', () => {
    render(<Post/>)

    const campoComentario = screen.getByTestId('textarea-comentario');
    const button = screen.getByTestId('buttom-submit');

    fireEvent.change(campoComentario, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);

    fireEvent.change(campoComentario, { target: { value: 'Segundo comentário' } });
    fireEvent.click(button);

    const comentarioItems = screen.getAllByTestId('comentario-item');
    expect(comentarioItems).toHaveLength(2);
});
