import './button.css';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
}

export default function Button({ text, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}
