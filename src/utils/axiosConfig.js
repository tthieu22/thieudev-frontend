export const base_url = "https://tthieudev.duckdns.org/api/";

const getTokenFromLocalStorage = localStorage.getItem("token");

export const config = {
  headers: {
    ...(getTokenFromLocalStorage && {
      Authorization: `Bearer ${getTokenFromLocalStorage}`,
    }),
    Accept: "application/json",
  },
};
