import "./attributeBar.css";

type AttributeBarProps = {
  title: string;
  value: number;
  height?: string;
};

function AttributeBar({ title, value, height }: AttributeBarProps) {
  const progressWidth = String(value * 10);
  return (
    <div className="attribute" style={{ height }}>
      <div className="title-container">{title}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressWidth}%` }}></div>
      </div>
      <div className="progress-value">{String(value)}</div>
    </div>
  );
}

export default AttributeBar;
