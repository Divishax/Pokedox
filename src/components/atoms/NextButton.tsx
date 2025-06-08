import React from "react";

interface NextButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 cursor-pointer"
    >
      Next
    </button>
  );
};

export default NextButton;
