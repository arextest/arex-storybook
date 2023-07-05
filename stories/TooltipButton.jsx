import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import {TooltipButton as TooltipButton1} from '@arextest/arex-core'
import {Button} from "./Button";

/**
 * Primary UI component for user interaction
 */
export const TooltipButton = ({ title,color,children }) => {
    return (
        <TooltipButton1 color={color} title={title}>{children}</TooltipButton1>
    );
};


TooltipButton.propTypes = {
    /**
     * hover后tooltip的提示内容
     */
    title: PropTypes.string.isRequired,
    /**
     * 文字的颜色
     */
    color: PropTypes.oneOf(['primary', 'text', 'secondary','disabled']),
    /**
     * 按钮内容
     */
    children:PropTypes.string
};

TooltipButton.defaultProps = {
    title:"我是标题啊",
    color:"primary",
    children:"摸我"
};
