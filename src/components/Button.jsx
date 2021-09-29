
import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const LinkStyle = styled(Link)`
    color: ${props => props.black ? "black" : "white"};
`

const Button = () => {
    return (
        <LinkStyle></LinkStyle>
    )
}

export default Button