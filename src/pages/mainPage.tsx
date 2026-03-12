import { useMemo, useState } from "react";
import "./mainPage.css";
import type { AthleteDataWithAttributes } from "../types/athleteType";
import Modal from "../shared/components/layout/modal";
import type { FilterValue } from "../types/filterTypes";
import SetAttributeForm from "../features/attributes/components/setAttributeForm";
import AthleteView from "../features/athletes/components/athleteView";
import { useAthletes } from "../features/athletes/hooks/useAthletes";
import { useSubmissions } from "../features/submissions/hooks/useSubmissions";
import useAthleteFilters from "../features/athletes/hooks/useAthleteFilters";
import NavigationTabs from "../features/tabs/components/navigationTabs";
import { useAthleteTeam } from "../features/teams/hooks/useAthleteTeam";
import useModalController from "../shared/hooks/useModalController";
import useMainTabs from "../features/tabs/hooks/useMainTabs";
import { initialFilters } from "../shared/components/filters/filters";
import type { TabsConfig } from "../types/tabTypes";
import AthleteTeamBuilder from "../features/teams/components/athleteTeamBuilder";
import TierListGrid from "../shared/components/layout/tierListGrid";
import TeamList from "../features/teams/components/teamList";
import { filterAthletesBySubmitted } from "../utils/filterUtils";
import AthletesTab from "../features/tabs/components/tabs/athletesTab";
import { useUser } from "../features/user/hooks/useUser";
import type { UserType } from "../types/userTypes";
import SignupTab from "../features/tabs/components/tabs/signupTab";
import type { AttributeSubmission } from "../types/attributeTypes";
import type { ModalConfig } from "../types/modalTypes";
import ModalController from "../shared/components/layout/modalController";
import ConfirmationModal from "../shared/components/ui/confirmationModal";
import AllstarTeamTab from "../features/tabs/components/tabs/allstarTeamTab";
import TabController from "../features/tabs/components/tabController";
import { AnimatePresence } from "framer-motion";
import ToastController, {
  type ToastLocationType,
} from "../shared/components/layout/toastController";
import { useToastController } from "../shared/hooks/useToastController";

function MainPage() {
  const [filters, setFilters] = useState<FilterValue>(initialFilters);
  const toast = useToastController();
  const {
    user,
    submitUser,
    error: userError,
    loading: userLoading,
  } = useUser({ setToastNotification: toast.addToast });
  const submissions = useSubmissions({
    userId: user.id,
    setToastNotification: toast.addToast,
  });
  const { athletes } = useAthletes({
    attributeSubmissions: submissions.submissions,
  });
  const { filteredAthletes } = useAthleteFilters({ filters, athletes });

  const team = useAthleteTeam({
    athletes: athletes,
    userId: user.id,
    setToastNotification: toast.addToast,
  });
  const modal = useModalController();
  const tabs = useMainTabs({
    teams: {
      selectedTeam: team.selectedTeamView,
      countryTeams: team.countryTeams,
      handleSetTeam,
    },
    hasUsername: Boolean(user.name),
  });

  const toastLocation: ToastLocationType = useMemo(() => {
    return tabs.activeTab === "username" ? "top" : "bottom";
  }, [tabs.activeTab]);

  async function handleSetTeam(athletes: AthleteDataWithAttributes[]) {
    const athletesId = athletes.map((athlete) => athlete.info.id);
    const res = await team.handleSetSelectedTeam(athletesId, user);
    if (res.ok) tabs.setActiveTab("asiaTeams");
  }
  const tabsConfig: TabsConfig[] = [
    {
      id: "teamBuilder",
      content: (
        <AthleteTeamBuilder
          athletes={athletes}
          handleSetTeam={handleSetTeam}
          loading={team.loading}
        />
      ),
    },
    {
      id: "athletes",
      content: (
        <AthletesTab
          filter={{ values: filters, setFilters }}
          athletes={filteredAthletes}
          onCardClick={modal.open}
          onRevealAll={() => modal.open({ open: true, type: "confirmation" })}
          submissions={submissions}
        />
      ),
    },
    {
      id: "tierList",
      content: (
        <TierListGrid
          athletes={filterAthletesBySubmitted(
            submissions.submittedVoteAccess,
            athletes,
          )}
          onCardClick={modal.open}
        />
      ),
    },
    {
      id: "asiaTeams",
      content: (
        <TeamList
          type="teams"
          countryTeams={team.countryTeams}
          selectedTeam={team.selectedTeamView}
        />
      ),
    },
    {
      id: "username",
      content: (
        <SignupTab
          error={userError}
          loading={userLoading}
          submitUser={async (user: UserType) => {
            const result = await submitUser(user);
            if (result.ok) {
              tabs.setActiveTab("athletes");
            }
          }}
        />
      ),
    },
    {
      id: "allstarTeam",
      content: (
        <AllstarTeamTab
          user={user}
          allstarTeams={team.allstarTeams}
          selectedTeam={team.selectedTeam}
        />
      ),
    },
  ];

  const modalsConfig: ModalConfig[] = [
    {
      id: "setAttributes",
      backDrop: true,
      render: () => {
        if (!modal.state.open || modal.state.type !== "setAttributes")
          return null;
        return (
          <Modal width="80%" height="90vh" type="middle" onClose={modal.close}>
            <SetAttributeForm
              hasMVPCountries={submissions.hasMVPCountries}
              athlete={modal.state.athlete}
              user={{ id: user.id, name: user.name }}
              handleSubmit={async (submission: AttributeSubmission) => {
                submissions.handleSubmitSubmissions(submission);
                modal.close();
              }}
            />
          </Modal>
        );
      },
    },
    {
      id: "athleteView",
      backDrop: true,
      render: () => {
        if (!modal.state.open || modal.state.type !== "athleteView")
          return null;
        return (
          <Modal width="80%" height="95vh" type="middle" onClose={modal.close}>
            <AthleteView
              submissions={submissions.submissions}
              athlete={modal.state.athlete}
            />
          </Modal>
        );
      },
    },
    {
      id: "confirmation",
      backDrop: true,
      render: () => {
        return (
          <ConfirmationModal
            title="Reveal all stats?"
            message="You will not be able to vote after revealing stats."
            onClose={modal.close}
            onConfirm={() => {
              submissions.handleRevealAll();
              modal.close();
            }}
          />
        );
      },
    },
  ];

  return (
    <div className="main-page">
      <AnimatePresence mode="wait">
        <ModalController
          key={modal.state.open ? modal.state.type : "closed"}
          state={modal.state}
          modals={modalsConfig}
          onClose={modal.close}
        />
      </AnimatePresence>
      <NavigationTabs
        active={tabs.activeTab}
        changeTab={(e) => tabs.setActiveTab(e)}
        allTabs={tabs.availableTabs}
        initialized={submissions.initialized}
      />
      <TabController activeTab={tabs.activeTab} tabs={tabsConfig} />
      <ToastController
        toasts={toast.toasts}
        removeToast={toast.removeToast}
        toastLocation={toastLocation}
      />
    </div>
  );
}

export default MainPage;
