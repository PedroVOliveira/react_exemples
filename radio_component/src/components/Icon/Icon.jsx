import React from "react";
import styled, { css } from "styled-components";

import svgIcons from "./svg";

const cursor = css`
  cursor: ${(props) => props.cursor}
`;

const SVGIcon = styled.svg`
  display: inline-block;
  vertical-align: middle;
  color: ${(props) => props.color};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  ${(props) => props.cursor && cursor}
`;

const Icon = ({ icon, size = 16, color ="#FFFFFF", onClick, className, cursor }) => (
  <SVGIcon
    viewBox="0 0 24 24"
    fillRule="evenodd"
    clipRule="evenodd"
    size={size}
    strokeLinejoin="round"
    color={color}
    cursor={cursor}
    className={className}
    onClick={onClick}
  >
    <title>{icon}</title>
    <path d={svgIcons[icon]} />
  </SVGIcon>
);

export default Icon;
