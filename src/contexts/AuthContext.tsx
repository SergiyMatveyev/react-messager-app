import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { IPropsChildren } from '../utilities/components.interface';
import firebase from 'firebase/compat/app';

interface IAuthContext {
  user?: firebase.User;
}

const AuthContext = createContext({});

export const useAuth = (): IAuthContext => useContext(AuthContext);

export const AuthProvider = ({ children }: IPropsChildren): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<firebase.User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
      if (user) navigate('/chats');
    });
  }, [user, navigate]);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
