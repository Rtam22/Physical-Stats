import { useState } from "react";
import type {
  AthleteDataWithAttributes,
  AttributeSubmission,
  RankKey,
} from "../../types/athleteType";
import "./setAttributeForm.css";
import { initialFormAttributes } from "../../data/athleteData";
import { capitalize } from "../../utils/textUtils";
import ToolTip from "../ui/toolTip";
import { attributeKey, ranksKey } from "../../data/attributeKey";
import { attributesToolTip, mvpToolTip } from "../../data/toolTipData";

type SetAttributeFormProps = {
  athlete: AthleteDataWithAttributes;
  handleSubmit: (submission: AttributeSubmission) => void;
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
    ranking: "",
  });

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSubmit(submission);
  }

  return (
    <div className="set-attribute-form">
      <div className="profile-container">
        <p>{athlete.info.name}</p>
        <div className="image-container">
          <img src={athlete.info.img} alt={`${athlete.info.name} portrait`} />
        </div>
      </div>
      <div className="attribute-form">
        <form onSubmit={handleSubmitForm}>
          <section className="attribute-container">
            {attributeKey.map((attribute, index) => (
              <div className="attributes" key={index}>
                <label htmlFor={attribute}>
                  <p>{capitalize(attribute)}</p>
                  <ToolTip information={attributesToolTip[attribute]} />
                </label>
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
                        values: {
                          ...prev.values,
                          [attribute]: Number(e.target.value),
                        },
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
          </section>
          <section>
            <label htmlFor="comment">Comment</label>
            <span style={{ width: "100%" }}>
              <textarea
                maxLength={200}
                className="comment"
                id="comment"
                value={submission.comment}
                onChange={(e) =>
                  setSubmission({ ...submission, comment: e.target.value })
                }
                placeholder="Leave your thoughts and opinion here"
              />
              <p style={{ textAlign: "right", color: "" }}>
                {submission.comment?.split("").length}/200
              </p>
            </span>
          </section>
          <section>
            <label htmlFor="ranking">Ranking</label>
            <select
              name="ranking"
              id="ranking"
              value={submission.ranking}
              onChange={(e) =>
                setSubmission({
                  ...submission,
                  ranking: e.target.value as RankKey,
                })
              }
              required
            >
              <option value={""}></option>
              {ranksKey.map((key) => {
                return (
                  <option key={key.key} value={key.key}>
                    {key.key}
                  </option>
                );
              })}
            </select>
          </section>
          <section>
            <label htmlFor="mvp" className="mvp">
              <p>MVP </p>
              <ToolTip information={mvpToolTip} />
            </label>
            <input
              id="mvp"
              type="checkbox"
              checked={submission.mvp}
              onChange={() =>
                setSubmission({ ...submission, mvp: !submission.mvp })
              }
            />
          </section>
          <section>
            <label htmlFor="mvp" className="favorite">
              Favorite
            </label>
            <input
              id="favorite"
              type="checkbox"
              checked={submission.favorite}
              onChange={() =>
                setSubmission({
                  ...submission,
                  favorite: !submission.favorite,
                })
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
