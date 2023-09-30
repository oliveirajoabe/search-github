import {
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { api } from "../lib/axios";
import useDebounce from "./useDebounce";

export const FetchGitHubContext = createContext({} as FetchGitHubContext);

export function FetchGitHubContextProvider({
  children,
}: FetchGitHubContextProviderProps) {
  const [searchInput, setSearchInput] = useState("");
  const [dataUser, setDataUser] = useState<DataUser>({});
  const [loadingDataUser, setLoadingDataUser] = useState(false);

  const fetchSearchUser = async (value: string) => {
    try {
      setLoadingDataUser(true);
      const { data } = await api.get(`/users/${value}`);
      setDataUser(data);
      setLoadingDataUser(false);
    } catch (error) {
      console.error(error);
    }
  };

  const debounceChange = useDebounce(fetchSearchUser, 800);

  const handleChangeInput = useCallback(
    (value: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = value.target.value;

      if (inputValue) {
        setSearchInput(inputValue);
        debounceChange(inputValue);
      } else {
        setSearchInput("");
        setDataUser({});
      }
    },
    [debounceChange]
  );

  const fetchRepos = async (login: string | undefined) => {
    try {
      if (login) {
        const { data } = await api.get(`/users/${login}/repos`);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const hasUser = useMemo(() => !!Object.keys(dataUser).length, [dataUser]);

  return (
    <FetchGitHubContext.Provider
      value={{
        handleChangeInput,
        searchInput,
        dataUser,
        loadingDataUser,
        fetchRepos,
        hasUser,
      }}
    >
      {children}
    </FetchGitHubContext.Provider>
  );
}

export const useFetchGitHub = () => {
  return useContext(FetchGitHubContext);
};
