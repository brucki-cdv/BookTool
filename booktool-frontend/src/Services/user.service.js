import axios from "axios";
import authHeader from "../Helpers/authHeader";
const API_URL = "http://localhost:8000/api/v1/";

const getAllReservations = (page, limit, status) => {
  return axios.get(
    API_URL + `reservation?page=${page}&limit=${limit}&status=${status}`,
    { withCredentials: true }
  );
};

const getReservation = (id) => {
  return axios.get(API_URL + `reservation/${id}`, { withCredentials: true });
};
const getReservationSummary = () => {
  return axios.get(API_URL + "reservation/summary", { withCredentials: true });
};
const getAllClients = (page, limit) => {
  return axios.get(API_URL + `client?page=${page}&limit=${limit}`, {
    withCredentials: true,
  });
};
const getClientInformation = (id) => {
  return axios.get(API_URL + `client/${id}`, { withCredentials: true });
};
const getApartments = () => {
  return axios.get(API_URL + `apartment`, { withCredentials: true });
};
const getApartment = (id) => {
  return axios.get(API_URL + `apartment/${id}`, { withCredentials: true });
};

const createApartment = (data) => {
  return axios.post(API_URL + "apartment", data, { withCredentials: true });
};

const updateApartment = (id, data) => {
  return axios.patch(API_URL + "apartment/" + id, data, {
    withCredentials: true,
  });
};

const createReservation = (data) => {
  return axios.post(API_URL + "reservation", data, { withCredentials: true });
};

const updateReservation = (id, data) => {
  return axios.patch(API_URL + `reservation/${id}`, data, {
    withCredentials: true,
  });
};

const deleteReservation = (id) => {
  return axios.delete(API_URL + `reservation/${id}`, { withCredentials: true });
};

const getMessages = () => {
  return axios.get(API_URL + "message", { withCredentials: true });
};

export default {
  getAllReservations,
  getReservation,
  getReservationSummary,
  getAllClients,
  getClientInformation,
  getApartment,
  createApartment,
  updateApartment,
  getApartments,
  updateReservation,
  deleteReservation,
  createReservation,
  getMessages,
};
