import { useState } from "react";
import type {
  AthleteDataWithAttributes,
  AttributeKey,
  AttributeSubmission,
} from "../types/athleteType";
import "./setAttributeForm.css";
import { initialFormAttributes } from "../data/athleteData";
import { capitalize } from "../utils/textUtils";

type SetAttributeFormProps = {
  athlete: AthleteDataWithAttributes;
  handleSubmit: (athlete: AthleteDataWithAttributes) => void;
};

function SetAttributeForm({ athlete, handleSubmit }: SetAttributeFormProps) {
  const [submission, setSubmission] = useState<AttributeSubmission>({
    athleteId: athlete.info.id,
    id: "dsadas",
    username: "",
    favorite: false,
    values: initialFormAttributes,
    mvp: false,
    comment: "",
  });

  const attributeKey: AttributeKey[] = [
    "strength",
    "explosiveness",
    "speed",
    "endurance",
    "cardio",
    "grit",
    "leadership",
  ];

  function handleSubmitForm() {
    handleSubmit;
  }

  return (
    <div className="set-attribute-form">
      <div className="profile-container">
        {submission.mvp && <p className="mvp-container">MVP</p>}
        <p>{athlete.info.name}</p>
        <img src={athlete.info.img} alt={`${athlete.info.name} portrait`} />
      </div>
      <div className="attribute-form">
        <form onSubmit={handleSubmitForm}>
          <section className="attribute-container">
            {attributeKey.map((attribute, index) => (
              <div className="attributes" key={index}>
                <label htmlFor={attribute}>{capitalize(attribute)}</label>
                <div className="input-container">
                  <input
                    id={attribute}
                    className="slider-form"
                    type="range"
                    min={1}
                    max={10}
                    step={0.5}
                    value={submission.values[attribute]}
                    onChange={(e) =>
                      setSubmission((prev) => ({
                        ...prev,
                        values: { ...prev.values, [attribute]: e.target.value },
                      }))
                    }
                  />
                  <input
                    className="number-display"
                    type="number"
                    id={attribute}
                    min={1}
                    max={10}
                    step={0.5}
                    value={submission.values[attribute]}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      const clamped = Math.min(10, Math.max(0, value));
                      setSubmission((prev) => ({
                        ...prev,
                        values: { ...prev.values, [attribute]: clamped },
                      }));
                    }}
                  />
                </div>
              </div>
            ))}
          </section>{" "}
          <section>
            <label htmlFor="comment">Comment</label>
            <textarea
              className="comment"
              id="comment"
              value={submission.username}
              onChange={(e) =>
                setSubmission({ ...submission, username: e.target.value })
              }
              placeholder="Leave your thoughts and opinion here"
            />
          </section>
          <section className="flex">
            <label htmlFor="mvp">MVP</label>
            <input
              id="mvp"
              type="checkbox"
              checked={submission.mvp}
              onChange={() =>
                setSubmission({ ...submission, mvp: !submission.mvp })
              }
            />

            <label htmlFor="mvp">Favorite</label>
            <input
              id="mvp"
              type="checkbox"
              checked={submission.favorite}
              onChange={() =>
                setSubmission({ ...submission, favorite: !submission.favorite })
              }
            />
          </section>
          <section>
            <button>Submit</button>
          </section>
        </form>
      </div>
    </div>
  );
}

export default SetAttributeForm;
