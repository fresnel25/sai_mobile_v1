import { createContext, useContext } from 'react';
import { loadPatient, loadAllPrescriptions, loadPrescription, loadAllTests, loadTest, loadAllAppointments, loadAppointment } from '../Services/AppService';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const appService = {
    loadPatient,
    loadAllPrescriptions,
    loadPrescription,
    loadAllTests,
    loadTest,
    loadAllAppointments,
    loadAppointment
  };

  return (
    <AppContext.Provider value={appService}>
      {children}
    </AppContext.Provider>
  );
};