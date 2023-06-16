import React from "react";
import GuestGuard from "../Guard/GuestGuard";
import useAuth from "../../Hooks/useAuth";
import css from "./Dashboad.module.css";
import Navigation from "../Navigation/Navigation";
import CompanyDetails from "../../CompanyDetails/CompanyDetails";
function Dashboard() {
  const {
    logOut,
    getUserInfo,
    onCreateCompany,
    onUpdateCompany,
    user,
    company,
  } = useAuth();
  if (!user) {
    return null;
  }

  return (
    <div className={css.root}>
      <Navigation logOut={logOut} user={user} company={company} />
      <CompanyDetails
        logOut={logOut}
        user={user}
        company={company}
        createCompany={onCreateCompany}
        updateCompany={onUpdateCompany}
      />
    </div>
  );
}

const DashboardComponent = () => {
  return (
    <GuestGuard>
      <Dashboard></Dashboard>
    </GuestGuard>
  );
};

export default DashboardComponent;
