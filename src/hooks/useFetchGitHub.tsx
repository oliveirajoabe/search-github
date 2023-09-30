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

  const [dataRepos, setDataRepos] = useState([]);
  const [loadingDataRepos, setLoadingDataRepos] = useState(false);

  const [dataRepoDetail, setDataRepoDetail] = useState(null);
  const [loadingDataRepoDetail, setLoadingDataRepoDetail] = useState(false);

  const [order, setOrder] = useState<Order>("desc");

  const fetchSearchUser = useCallback(async (value: string) => {
    try {
      setLoadingDataUser(true);
      const { data } = await api.get(`/users/${value}`);
      setDataUser(data);
      setLoadingDataUser(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

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

  const fetchRepos = useCallback(
    async (login: string | undefined) => {
      try {
        setLoadingDataRepos(true);
        const params = {
          sort: "stars",
          direction: order,
        };

        if (login) {
          const { data } = await api.get(`/users/${login}/repos`, {
            params,
          });
          setDataRepos(data);
        }
        setLoadingDataRepos(false);
      } catch (error) {
        console.error(error);
      }
    },
    [order]
  );

  const fetchDetailsRepo = useCallback(async (fullname: string) => {
    try {
      setLoadingDataRepoDetail(true);
      if (fullname) {
        const { data } = await api.get(`/repos/${fullname}`);

        setDataRepoDetail(data);
      }
      setLoadingDataRepoDetail(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const hasUser = useMemo(() => !!Object.keys(dataUser).length, [dataUser]);

  const handleChangeOrder = (value: Order) => {
    setOrder(value);
  };

  return (
    <FetchGitHubContext.Provider
      value={{
        handleChangeInput,
        searchInput,
        dataUser,
        loadingDataUser,
        fetchRepos,
        hasUser,
        dataRepos,
        fetchDetailsRepo,
        dataRepoDetail,
        loadingDataRepos,
        loadingDataRepoDetail,
        handleChangeOrder,
        order,
      }}
    >
      {children}
    </FetchGitHubContext.Provider>
  );
}

export const useFetchGitHub = () => {
  return useContext(FetchGitHubContext);
};
