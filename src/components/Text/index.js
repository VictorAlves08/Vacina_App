import React from 'react';
import * as Styled from './styles';

const TextComponent = ({
    children,
    color = '#fff',
    fontSize = 16,
    fontFamily = 'Roboto',
    ...props
}) => {
    return (
        <Styled.ContainerText
            fontFamily={fontFamily}
            color={color}
            fontSize={fontSize}
            {...props}>
            {children}
        </Styled.ContainerText>
    );
};

export default TextComponent;
