import React from "react";
import styled from "styled-components";

const StyledConfigurator = styled.div`
	position: fixed;
	height: 100px;
	width: 100px;
	right: 32px;
	top: 32px;
    border: 2px solid white;
    border-radius: 16px;
    padding: 16px;
`;

const Configurator = () => {
	return <StyledConfigurator>Configurator</StyledConfigurator>;
};

export default Configurator;
