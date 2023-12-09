import axios, { AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";
import { router } from "./Routes";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const responseBody = (response: AxiosResponse) => response.data;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;

    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        }
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 404:
        toast.error(data.title);
        break;
      case 403:
        toast.error("You are not allowed to do that!");
        break;
      case 500:
        router.navigate("/server-error", { state: { error: data } });
        break;
      default:
        break;

        return Promise.reject(error.response);
    }
  }
);

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
  get2: (url: string) => axios.get(url),
  put2: (url: string, body: object) => axios.put(url, body),
};

const Item = {
  getItem: (value: number) => requests.get("items/" + value),
  createItem: (values: object) => requests.post("items", values),
  listItems: () => requests.get("items"),
  updateItem: (values: object) => requests.put("items/" + values, values),
};

const Location = {
  getLocation: (value: number) => requests.get("locations" + value),
  createLocation: (values: object) => requests.post("locations", values),
  listLocations: () => requests.get("locations"),
  updateLocation: (values: object) =>
    requests.put("locations/" + values, values),
};

const agent = {
  Item,
  Location,
};

export default agent;
