import "./toolTip.css";

type ToolTipProps = {
  information: string;
};

function ToolTip({ information }: ToolTipProps) {
  return (
    <div className="tool-tip">
      <div className="icon">?</div>
      <p className="information-display">{information}</p>
    </div>
  );
}

export default ToolTip;
