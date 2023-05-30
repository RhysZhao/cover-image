/*
 * Author  rhys.zhao
 * Date  2023-05-30 18:00:38
 * LastEditors  rhys.zhao
 * LastEditTime  2023-05-30 18:37:21
 * Description 输入框组件
 */
import React from 'react';
import styles from './index.module.scss';

const Input = ({ className, style, value, onChange, disabled }) => {
  return (
    <input
      type='text'
      disabled={disabled}
      className={`${styles.input} ${disabled && styles.inputDisabled} ${className}`}
      style={style}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
