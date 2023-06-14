import React, { useState } from "react";

function Register() {
  const [registrationForm, setForm] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    nameError: null,
    emailError: null,
    userNameError: null,
    passwordError: null,
    confirmPasswordError: null,
  });

  const handleFormChange = (e) => {
    console.log(e.target.name, e.target.value, e);
    switch (e.target.name) {
      case "name":
        setForm({
          ...registrationForm,
          name: e.target.value,
        });

        setErrors({
          ...errors,
          nameError:
            e.target.value.trim() === "" ? "Ths field is required" : null,
        });

        break;
      case "email":
        setForm({
          ...registrationForm,
          email: e.target.value,
        });
        setErrors({
          ...errors,
          emailError:
            e.target.value.trim() === ""
              ? "Ths field is required"
              : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
              ? "Invalid email format"
              : null,
        });

        break;
      case "userName":
        setForm({
          ...registrationForm,
          userName: e.target.value,
        });
        setErrors({
          ...errors,
          userNameError:
            e.target.value.trim() === ""
              ? "Ths field is required"
              : e.target.value.includes(" ")
              ? "Format error no space"
              : null,
        });

        break;
      case "password":
        setForm({
          ...registrationForm,
          password: e.target.value,
        });
        setErrors({
          ...errors,
          passwordError:
            e.target.value.trim() === ""
              ? "Ths field is required"
              : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(e.target.value)
              ? "Invalid email format"
              : null,
        });

        break;
      case "confirmPassword":
        setForm({
          ...registrationForm,
          confirmPassword: e.target.value,
        });
        setErrors({
          ...errors,
          confirmPasswordError:
            e.target.value.trim() === ""
              ? "Ths field is required"
              : e.target.value !== registrationForm.password
              ? "Passwords do not match"
              : null,
        });

        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registrationForm);
  };
  return (
    <div className="container border my-5 p-5 shadow w-50">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            value={registrationForm.name}
            onChange={handleFormChange}
          />
          <small className="text-danger">{errors.nameError}</small>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={registrationForm.email}
            onChange={handleFormChange}
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
          />
          <small className="text-danger">{errors.emailError}</small>
        </div>
        <div class="mb-3">
          <label for="userName" class="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            name="userName"
            value={registrationForm.userName}
            onChange={handleFormChange}
          />
          <small className="text-danger">{errors.userNameError}</small>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={registrationForm.password}
            onChange={handleFormChange}
          />
          <small className="text-danger">{errors.passwordError}</small>
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            class="form-control"
            value={registrationForm.confirmPassword}
            onChange={handleFormChange}
          />
          <small className="text-danger">{errors.confirmPasswordError}</small>
        </div>
        <button type="submit" class="btn btn-success w-100">
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
