import 'react-native';
import React from 'react';
import App from '../App';
import { cleanup, render,screen, fireEvent } from "@testing-library/react-native";
import { Login } from '../Component/Login';


describe('LOGIN SCREENS ',()=>{

    const addHandler = jest.fn()

    test('Input Field and add Button working correctly ', () => {

       const navigation ={navigate:()=>{}}
      
        const { getByPlaceholderText, getByText} = render(<Login navigation={navigation} AddUser={addHandler} />);

        const nameInput = getByPlaceholderText('Enter name');
        const emailInput = getByPlaceholderText('Enter Email');
        const button = getByText('login');

        fireEvent.changeText(nameInput, 'test');
        fireEvent.changeText(emailInput, 'test@gmail.com');
        fireEvent.press(button)

        expect(addHandler).toHaveBeenCalledWith('test','test@gmail.com')

       
    });
    test('after clicking to add button, screen navigated to Home screen ', () => {

       const navigation ={navigate:()=>{}}
       jest.spyOn(navigation,'navigate')
       
        const { getByPlaceholderText, getByText} = render(<Login navigation={navigation} AddUser={addHandler} />);

        const nameInput = getByPlaceholderText('Enter name');
        const emailInput = getByPlaceholderText('Enter Email');
        const button = getByText('login');

        fireEvent.changeText(nameInput, 'test');
        fireEvent.changeText(emailInput, 'test@gmail.com');
        fireEvent.press(button)

        expect(addHandler).toHaveBeenCalledWith('test','test@gmail.com')

        expect(navigation.navigate).toHaveBeenCalledWith('Home')

    });

})