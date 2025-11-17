import "./backDrop.css";

type BackDropProps = {
  children: React.ReactNode;
  onClose: () => void;
};

function BackDrop({ onClose, children }: BackDropProps) {
  return (
    <div className="back-drop" onClick={onClose}>
      {children}
    </div>
  );
}

export default BackDrop;
