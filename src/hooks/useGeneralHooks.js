import { useSelector, useDispatch } from "react-redux";

const useGeneralHooks = () => {
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return {
    ui,
    dispatch,
  };
};

export default useGeneralHooks;
