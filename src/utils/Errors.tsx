import Swal from "sweetalert2";

interface ModalErrorProps {
  title?: string;
  text?: string;
}

const showModalError = ({
  title = "Error",
  text = "Ha ocurrido un error.",
}: ModalErrorProps = {}) => {
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
  });
};

export default showModalError;
