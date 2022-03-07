import axios from "axios";
import authHeader from "../Helpers/authHeader";
const API_URL = "http://localhost:8000/api/v1/";

const getAllReservations = (page, limit, status) => {
  return axios.get(
    API_URL + `reservation?page=${page}&limit=${limit}&status=${status}`,
    authHeader()
  );
};

const getReservation = (id) => {
  return axios.get(API_URL + `reservation/${id}`, authHeader());
};
const getReservationSummary = () => {
  return axios.get(API_URL + "reservation/summary", authHeader());
};
const getAllClients = (page, limit) => {
  return axios.get(
    API_URL + `client?page=${page}&limit=${limit}`,
    authHeader()
  );
};
const getClientInformation = (id) => {
  return axios.get(API_URL + `client/${id}`, authHeader());
};
const getApartments = () => {
  return axios.get(API_URL + `apartment`, authHeader());
};
const getApartment = (houseNumber) => {
  return axios.get(API_URL + `apartment/${houseNumber}`, authHeader());
};

const updateReservation = (reservation, id) => {
  return axios.patch(API_URL + `reservation/${id}`, reservation, authHeader());
};

const deleteReservation = (id) => {
  return axios.delete(API_URL + `reservation/${id}`, authHeader());
}

const getMessages = () => {
  return axios.get(API_URL + 'message', authHeader());
}


export default {
  getAllReservations,
  getReservation,
  getReservationSummary,
  getAllClients,
  getClientInformation,
  getApartment,
  getApartments,
  updateReservation,
  deleteReservation,
  getMessages
};
