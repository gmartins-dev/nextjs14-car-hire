interface ButtonProps {
  children: React.ReactNode;
  bgColor: string;
}

const Button: React.FC<ButtonProps> = ({ children, bgColor }) => (
  <button className={`px-6 py-4 font-bold text-2xl text-white rounded ${bgColor}`}>
    {children}
  </button>
);

export default Button;
