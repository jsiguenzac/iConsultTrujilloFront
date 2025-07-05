import constants from '../constants';

export interface AuthResult {
  token: string;
  refreshToken: string;
  userRole: string;
  userId: string;
  isAdmin: boolean;
}

const tokenSeparator = ',';

export default class AuthManager {
  public static async setCredentials(authResult: AuthResult): Promise<void> {
    const { token, refreshToken, userRole, userId, isAdmin } =
      authResult;
    await localStorage.setItem(
      constants.AUTH_TOKEN,
      [token, refreshToken, userRole, userId, isAdmin].join(
        tokenSeparator
      )
    );
  }

  public static readonly getCredentials = () => {
    try {
      const credentials = localStorage.getItem(constants.AUTH_TOKEN);
      if (!credentials) {
        return null;
      }
      const [token, refreshToken, userRole, userId, isAdmin] =
        credentials.split(tokenSeparator);
      return { token, refreshToken, userRole, userId, isAdmin };
    } catch (error) {
      return null;
    }
  };

  public static readonly deleteCredentials = async () => {
    await localStorage.removeItem(constants.AUTH_TOKEN);
  };
}
