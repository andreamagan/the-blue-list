import './button.css';

interface ButtonProps {
  text?: string;
  icon?: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ icon, text, onClick, className }: ButtonProps) => {
  return (
    <button onClick={() => onClick()} className={`button ${className}`}>
      {text && <div>{text}</div>}
      {icon && <span className="material-icons">{icon}</span>}
    </button>
  );
};

export default Button;
