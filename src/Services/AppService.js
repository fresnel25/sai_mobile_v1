import axios from "../Utils/axios";
import { setToken } from "./TokenService";

export const loadPatient = async (id) => {
  try {
    const { data } = await axios.get(`api/v1/patient/view/${id}`);
    return data.patient;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized access:", error);
    } else {
      console.error("Error loading patient:", error);
    }
    throw error;
  }
};

export const loadAllPrescriptions = async (id) => {
  try {
    const { data } = await axios.get(`api/all/prescription/${id}`);
    return data;
  } catch (error) {
    console.error("Error loading all prescriptions:", error);
    throw error;
  }
};

export const loadPrescription = async (patientId, prescriptionId) => {
  try {
    const { data } = await axios.get(`api/prescription/${patientId}/${prescriptionId}`);
    return data;
  } catch (error) {
    console.error("Error loading prescription:", error);
    throw error;
  }
};

export const loadAllTests = async (id) => {
  try {
    const { data } = await axios.get(`api/all/test/${id}`);
    return data;
  } catch (error) {
    console.error("Error loading all tests:", error);
    throw error;
  }
};

export const loadTest = async (patientId, testId) => {
  try {
    const { data } = await axios.get(`api/test/${patientId}/${testId}`);
    return data;
  } catch (error) {
    console.error("Error loading test:", error);
    throw error;
  }
};

export const loadAllAppointments = async (id) => {
  try {
    const { data } = await axios.get(`api/all/appointment/${id}`);
    return data;
  } catch (error) {
    console.error("Error loading all appointments:", error);
    throw error;
  }
};

export const loadAppointment = async (patientId, appointmentId) => {
  try {
    const { data } = await axios.get(`api/appointment/${patientId}/${appointmentId}`);
    return data;
  } catch (error) {
    console.error("Error loading appointment:", error);
    throw error;
  }
};
