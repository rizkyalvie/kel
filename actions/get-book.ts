"use server";
import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes/";

export const getPost = async (id: string | null) => {
  try {
    const res = await axios.get(BASE_URL + id);
    return res.data;
  } catch (error) {
    return error;
  }
};
