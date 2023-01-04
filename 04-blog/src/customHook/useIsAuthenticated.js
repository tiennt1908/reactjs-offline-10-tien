import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function useAuthenticated() {

  const history = useHistory();
  const currentUser = useSelector(state => state.user.currentUser);
  useEffect(() => {
    if (currentUser?.id) {
      history.push("/");
    }
  }, [currentUser, history])
  
}
export default useAuthenticated;
