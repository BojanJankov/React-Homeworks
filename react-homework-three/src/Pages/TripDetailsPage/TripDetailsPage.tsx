import { useForm } from "react-hook-form";
import "./TripDetailsPage.css";
import { useContext } from "react";
import { ItemContext } from "../../Context/ItemContext";
import { NavLink } from "react-router-dom";

export interface FormValues {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
}

function TripDetailsPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
    },
  });
  const { onSubmit } = useContext(ItemContext);
  return (
    <section className="TripDetailsPage">
      <form
        className="trip-details-form"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <input
          type="text"
          placeholder="First Name"
          {...register("firstName", {
            required: { value: true, message: "First Name is required!" },
          })}
        />
        <input
          type="text"
          placeholder="Last Name"
          {...register("lastName", {
            required: { value: true, message: "Last Name is required!" },
          })}
        />
        <input
          type="text"
          placeholder="Date of Birth"
          {...register("dateOfBirth", {
            required: { value: true, message: "Date of birth is required!" },
          })}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "Email is required!" },
          })}
        />
        <input
          type="text"
          placeholder="Phone number"
          {...register("phoneNumber", {
            required: { value: true, message: "Phone number is required!" },
          })}
        />
        <div>
          <div>
            {!isValid && isSubmitted ? (
              <div>Are fields are required</div>
            ) : null}
          </div>
          <button className="add-button" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="display-trip-btn">
        <NavLink to="/summary">
          <button>Display Trip Data</button>
        </NavLink>
      </div>
    </section>
  );
}

export default TripDetailsPage;
