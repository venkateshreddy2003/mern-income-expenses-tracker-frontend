import { useNavigate } from "react-router-dom";

const Redirect = async (pa) => {
  const naviagtor = useNavigate();
  naviagtor(pa);
};
export default Redirect;
