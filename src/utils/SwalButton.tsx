import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface Props {
  icon?: "error" | "success" | "info" | "question" | "warning" | undefined;
  title?: string;
  text: string;
  nameButton: string;
  redirect: string;
}

const SwalButton = ({ icon, title, text, nameButton, redirect }: Props) => {
  const navigate = useNavigate();

  return Swal.fire({
    icon: icon,
    text: title,
    title: text,
    confirmButtonText: nameButton,
  }).then(() => {
    navigate(redirect);
  });
};

export default SwalButton;
