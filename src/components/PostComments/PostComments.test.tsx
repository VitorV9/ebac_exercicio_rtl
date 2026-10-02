import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComments', () => {
    test('Deve adicionar dois comentários corretamente', () => {
        render(<PostComments />);

        const textarea = screen.getByTestId('comentario-textarea');
        const botaoSubmit = screen.getByTestId('comentario-botao');

        fireEvent.change(textarea, { target: { value: 'Primeiro comentário de teste' } });
        fireEvent.click(botaoSubmit);

        fireEvent.change(textarea, { target: { value: 'Segundo comentário de teste' } });
        fireEvent.click(botaoSubmit);

        const comentariosRenderizados = screen.getAllByTestId('comentario-elemento');
        expect(comentariosRenderizados).toHaveLength(2);
    });
});