import styles from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );

    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.label} htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            placeholder="Username"
          />
          {errors.e1 ? (
            <p className={styles.error}>{errors.e1}</p>
          ) : errors.e2 ? (
            <p className={styles.error}>{errors.e2}</p>
          ) : (
            <p className={styles.error}>{errors.e3}</p>
          )}
        </div>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          {errors.p1 ? <p className={styles.error}>{errors.p1}</p> : <p className={styles.error}>{errors.p2}</p>}
        </div>
        <button className={styles.boton} type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Form;
