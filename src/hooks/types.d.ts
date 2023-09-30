interface DataUser {
  avatar_url?: string;
  bio?: string | null;
  blog?: string;
  company?: string | null;
  created_at?: string;
  email?: string | null;
  events_url?: string;
  followers?: number;
  followers_url?: string;
  following?: number;
  following_url?: string;
  gists_url?: string;
  gravatar_id?: string;
  hireable?: string | null;
  html_url?: string;
  id?: number;
  location?: string;
  login?: string;
  name?: string;
  node_id?: string;
  organizations_url?: string;
  public_gists?: number;
  public_repos?: number;
  received_events_url?: string;
  repos_url?: string;
  site_admin?: boolean;
  starred_url?: string;
  subscriptions_url?: string;
  twitter_username?: string | null;
  type?: string;
  updated_at?: string;
  url?: string;
}

type FetchGitHubContextProviderProps = {
  children: ReactNode;
};

interface FetchGitHubContext {
  handleChangeInput: (value: React.ChangeEvent<HTMLInputElement>) => void;
  searchInput: string;
  dataUser: DataUser;
  loadingDataUser: boolean;
  fetchRepos: (login: string | undefined) => void;
  hasUser: boolean;
}
