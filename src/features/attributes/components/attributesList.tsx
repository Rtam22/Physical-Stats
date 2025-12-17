import type { AttributeValues } from "../../../types/athleteType";
import AttributeBar from "./attributeBar";
import "./AttributesList.css";

type AttributesContainerProps = {
  attributes: AttributeValues;
  attributesHeight?: string;
};

function AttributesList({
  attributes,
  attributesHeight = "24.5px",
}: AttributesContainerProps) {
  return (
    <div className="attributes-list">
      <div className="attribute-container">
        {Object.entries(attributes).map(([key, value]) => {
          const title = key.charAt(0).toUpperCase() + key.slice(1);
          return (
            <AttributeBar
              key={key}
              title={title}
              value={value}
              height={attributesHeight}
            />
          );
        })}
        <div className="total-container"></div>
      </div>
    </div>
  );
}

export default AttributesList;
