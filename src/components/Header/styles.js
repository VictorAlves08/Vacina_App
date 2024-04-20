import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props => props.theme.colors.primary};
`;

export const Text = styled.Text`
    color: ${props => props.theme.colors.onPrimary};
    font-size: 24px;
`;
