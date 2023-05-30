/*
 * Author  rhys.zhao
 * Date  2023-05-30 18:36:44
 * LastEditors  rhys.zhao
 * LastEditTime  2023-05-30 18:38:02
 * Description 按钮组件
 */
import React from 'react';
import styles from './index.module.scss';

const Button = ({ className, style, children, onClick }) => {
  return (
    <span className={`${styles.button} ${className}`} style={style} onClick={onClick}>
      {children}
    </span>
  );
};

export default Button;
