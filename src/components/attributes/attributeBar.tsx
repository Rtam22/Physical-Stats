import "./attributeBar.css";

type AttributeBarProps = {
  title: string;
  value: number;
};

function AttributeBar({ title, value }: AttributeBarProps) {
  const progressWidth = String(value * 10);
  return (
    <div className="attribute">
      <div className="title-container">{title}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressWidth}%` }}></div>
      </div>
      <div className="progress-value">{String(value)}</div>
    </div>
  );
}

export default AttributeBar;
