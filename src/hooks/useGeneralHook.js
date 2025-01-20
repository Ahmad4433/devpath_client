import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useGeneralHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return {
    navigate,
    dispatch,
    useSelector,
  };
};

export default useGeneralHook;
