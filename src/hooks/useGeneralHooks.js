import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
const useGeneralHooks = () => {
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
const navigate = useNavigate()
  return {
    ui,
    dispatch,
    navigate
  };
};

export default useGeneralHooks;
