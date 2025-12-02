import "./toolTip.css";

type ToolTipProps = {
  information: string;
};

function ToolTip({ information }: ToolTipProps) {
  return (
    <div className="tool-tip">
      <div className="icon">?</div>
      <div className="information-display">{information}</div>
    </div>
  );
}

export default ToolTip;
