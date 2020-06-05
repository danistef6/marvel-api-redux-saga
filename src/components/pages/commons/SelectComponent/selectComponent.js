import React from 'react'
import PropTypes from 'prop-types'
import { compose, setPropTypes, defaultProps} from 'recompose'
import {Select, Label} from'./styles';

const SelectComponent= ({
  id,
  label,
  required,
  input,
  children,
  wcagObject,
  classNameLabel,
  classNameSelect,
  classNameSpan,
  onChangeSelect
}) => (
  <div>
    <Label className={classNameLabel} htmlFor={id}>
      {label}
    </Label>
    <Select 

      className={classNameSelect}
      aria-label={wcagObject ? wcagObject.message : ''}
      aria-required={required}
      {...input}
      id={id}
      onChange={onChangeSelect}
    >
      {children}
    </Select>
    <span className={classNameSpan} id={`${id}-select-error`}>
    </span>
  </div>
)

const _propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool.isRequired,
  input: PropTypes.object,
  children: PropTypes.node.isRequired,
  onChangeSelect: PropTypes.func,
  wcagObject: PropTypes.object,
}

const _defaultProps = {
  id: '',
  label: 'label-text',
  required: false,
  input: {},
}

const mainEnhancer = compose(
  setPropTypes(_propTypes),
  defaultProps(_defaultProps)
)(SelectComponent)

export { mainEnhancer as default, SelectComponent }
