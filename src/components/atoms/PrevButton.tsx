interface PrevButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const PrevButton: React.FC<PrevButtonProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 cursor-pointer disabled:cursor-not-allowed"
    >
      Previous
    </button>
  );
};

export default PrevButton;
