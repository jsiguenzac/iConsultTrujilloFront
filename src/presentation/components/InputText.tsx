import React from 'react';

interface Props {
  value?: string;
  label?: string;
  onChange?: (event: any) => void;
  className?: string;
  secondary?: boolean;
  icon?: string;
  disable?: boolean;
  number?: boolean;
  password?: boolean;
  placeholder?: string;
  error?: any;
  textError?: string;
  textArea?: any;
  maxLength?: number;
  autocomplete?: string;
}

function InputText(props: Readonly<Props>) {
  const {
    value,
    onChange,
    className,
    disable,
    number,
    password,
    placeholder,
    textArea,
    maxLength,
    autocomplete
  } = props;
  if (textArea) {
    // const { autoGrow } = textArea;
    return (
      <input
        data-testid="cmp-cc-textarea"
        className={`textarea ${className}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autocomplete}
        disabled={disable}
      />
    );
  }
  return (
    <input
      data-testid="cmp-cc-input"
      className={className}
      value={value}
      onChange={onChange}
      disabled={disable}
      type={(number && 'number') || (password && 'password') || 'text'}
      placeholder={placeholder}
      maxLength={maxLength}
      autoComplete={autocomplete}
    />
  );
}

InputText.defaultProps = {
  value: '',
  label: '',
  onChange: () => {},
  secondary: false,
  className: '',
  icon: '',
  disable: false,
  number: false,
  password: false,
  placeholder: '',
  error: null,
  textError: '',
  textArea: '',
  maxLength: 100,
  autocomplete: ''
};

export default InputText;
