import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ authService, userService, children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    authService.me().then(setUser).catch(console.error);
  }, [authService]);

  const signUp = useCallback(
    async (email, password, username, job, introduce) => authService.signup(email, password, username, job, introduce),
    [authService]
  );

  const login = useCallback(async (email, password) => authService.login(email, password).then(user => setUser(user)), [authService]);

  const logout = useCallback(async () => authService.logout().then(() => setUser(undefined)), [authService]);

  const editUser = useCallback(
    async (username, introduce, user) => userService.editUser(username, introduce, user).then(user => setUser(user)),
    [userService]
  );

  const context = useMemo(
    () => ({
      user,
      signUp,
      login,
      logout,
      editUser,
    }),
    [user, signUp, login, logout, editUser]
  );

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}

export default AuthContext;
export const useAuth = () => useContext(AuthContext);
