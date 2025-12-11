import type { AthleteDataWithAttributes } from "../../types/athleteType";
import "./athleteTeamBuilder.css";
import { motion } from "framer-motion";
import useTeamBuilder from "../../hooks/useAthleteTeamBuilder";

type AthleteTeamBuilderProps = {
  athletes: AthleteDataWithAttributes[];
  setTeam: (athletes: AthleteDataWithAttributes[]) => void;
};

function AthleteTeamBuilder({ athletes, setTeam }: AthleteTeamBuilderProps) {
  const {
    availableAthletes,
    maleSelected,
    femaleSelected,
    filters,
    teamSize,
    selectedAthletes,
    teamCounter,
    setFilters,
    addAthlete,
    removeAthlete,
  } = useTeamBuilder({ athletes });

  function handleCompleteTeam() {
    setTeam(selectedAthletes);
  }

  function generateSelectedCard(index: number, gender: "male" | "female") {
    const athletes = gender === "male" ? maleSelected : femaleSelected;
    const athlete = athletes[index];
    const key = athlete ? athlete.info.id : index.toString();
    if (!athlete) {
      return <div key={key} className="athlete-container empty-slot" />;
    }
    return (
      <motion.button
        key={key}
        layoutId={athlete.info.id}
        className="athlete-container"
        onClick={() => removeAthlete(athlete)}
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <img src={athlete.info.imgSm} alt={`${athlete.info.name}'s image`} />
      </motion.button>
    );
  }

  return (
    <div className="team-builder">
      <div>
        {" "}
        <div className="button-container">
          <button className="button-plain">Skip</button>
          <button
            className="button-plain main"
            disabled={!(teamCounter.male === 4 && teamCounter.female === 2)}
            onClick={handleCompleteTeam}
          >
            Set Team
          </button>
        </div>
        <div className="selected-team-container">
          <div className="male-section">
            {Array.from({ length: teamSize.male }, (_, index) => {
              return generateSelectedCard(index, "male");
            })}
          </div>
          <div className="female-section">
            {Array.from({ length: teamSize.female }, (_, index) => {
              return generateSelectedCard(index, "female");
            })}
          </div>
        </div>
      </div>
      <div className="search-container">
        <input
          placeholder="Search.."
          type="search"
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, search: e.target.value }))
          }
          value={filters.search}
        />
      </div>
      <div className="athletes-container">
        {availableAthletes.map((athlete, index) => {
          const isDisabled = selectedAthletes.some(
            (selected) => athlete.info.id === selected.info.id
          );
          const key = athlete.info.id;
          const athleteSelected = selectedAthletes.some(
            (a) => a.info.id === athlete.info.id
          );

          if (athleteSelected)
            return <div key={index} className="athlete-container"></div>;

          return (
            <motion.button
              key={key}
              layoutId={athlete.info.id}
              disabled={isDisabled}
              className="athlete-container"
              onClick={() => addAthlete(athlete)}
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <img
                key={key}
                src={athlete.info.img}
                alt={`${athlete.info.name}'s image`}
              />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export default AthleteTeamBuilder;
