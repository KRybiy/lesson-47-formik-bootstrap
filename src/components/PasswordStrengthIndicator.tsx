// PasswordStrengthIndicator.tsx
import React from 'react';

interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password }) => {
  const getStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[\W_]/.test(password)) strength += 1;
    return strength;
  };

  const strength = getStrength(password);

  return (
    <div>
      <p>Password strength:</p>
      <div style={{ width: `${strength * 20}%`, height: '5px', background: 'green' }}></div>
    </div>
  );
};

export default PasswordStrengthIndicator;
