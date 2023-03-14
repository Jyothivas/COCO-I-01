import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App Component', () => {
    it('App component is defined', () => {
        expect(App).toBeDefined();
    });

    it('should show userform without userlist ', () => {
        const page = render(<App index={0} />);
        page.getByTestId('mainview');
        expect(page.queryAllByTestId('user-form').length).toEqual(1);
        expect(page.queryAllByTestId('formlist').length).toEqual(0);

    });

    it('show userlist without userform', () => {
        const page = render(<App index={1} />);
        page.getByTestId('mainview');
        expect(page.queryAllByTestId('user-form').length).toEqual(0);
        expect(page.queryAllByTestId('formlist').length).toEqual(1);

    });


});
