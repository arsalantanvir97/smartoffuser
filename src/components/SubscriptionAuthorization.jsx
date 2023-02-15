import Swal from "sweetalert2";

const SubscriptionAuthorization = (history) => {
  Swal.fire({
    icon: "info",
    title: "",
    text: "Please subscribe to one of our package to proceed further",
    showConfirmButton: false,
    timer: 1500
  });
  history?.push('/Packages')
};

export default SubscriptionAuthorization;
