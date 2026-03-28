import type { AthleteDataWithAttributes } from "../../../types/athleteType";
import "./athleteTeamBuilder.css";
import { motion } from "framer-motion";
import useTeamBuilder from "../hooks/useAthleteTeamBuilder";
import { useEffect } from "react";
import Loader from "../../../shared/components/ui/loader";

type AthleteTeamBuilderProps = {
  athletes: AthleteDataWithAttributes[];
  handleSetTeam: (athletes: AthleteDataWithAttributes[]) => void;
  loading: boolean;
};

function AthleteTeamBuilder({
  athletes,
  handleSetTeam,
  loading,
}: AthleteTeamBuilderProps) {
  const {
    availableAthletes,
    currentGenderSelection,
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

  useEffect(() => {}, [currentGenderSelection]);

  function handleCompleteTeam() {
    try {
      handleSetTeam(selectedAthletes);
    } finally {
      console.log("done");
    }
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
        disabled={loading}
      >
        <img
          src={athlete.info.imgSm}
          decoding="async"
          loading="lazy"
          alt={`${athlete.info.name}'s image`}
        />
      </motion.button>
    );
  }

  return (
    <div className="team-builder">
      <div className="selected">
        <div className="button-container">
          <button
            className="button-focus main"
            disabled={
              !(teamCounter.male === 4 && teamCounter.female === 2) || loading
            }
            onClick={handleCompleteTeam}
          >
            {loading ? <Loader type="dots" size={35} /> : "Set Team"}
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
      <p className="description">Vote for your top allstar team</p>
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
      <div>
        <motion.div
          className="athletes-container"
          key={currentGenderSelection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          {availableAthletes.map((athlete, index) => {
            const isDisabled = selectedAthletes.some(
              (selected) => athlete.info.id === selected.info.id,
            );
            const key = athlete.info.id;
            const athleteSelected = selectedAthletes.some(
              (a) => a.info.id === athlete.info.id,
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
        </motion.div>
      </div>
    </div>
  );
}

export default AthleteTeamBuilder;
