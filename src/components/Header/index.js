import React, {useContext} from 'react';

import {ThemeContext} from 'styled-components/native';
import {Button} from 'react-native';

import * as Styled from './styles';

const Header = ({handleChangeAppearance}) => {
    const themeContext = useContext(ThemeContext);
    return (
        <Styled.Container>
            <Styled.Text>Hello, World!</Styled.Text>
            <Button
                color={themeContext.colors.button}
                title="Change theme"
                onPress={handleChangeAppearance}
            />
        </Styled.Container>
    );
};

export default Header;
