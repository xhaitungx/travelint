import React, { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Formik } from "formik";
import "./login.scss";
const Login = ({ login }) => {
  const [loginOn, setLoginOn] = useState(login);
  function buttonStyle(primaryColor, secondColor, borderRadius, padding) {
    var obj = {
      padding: padding,
      color: primaryColor,
      background: secondColor,
      borderRadius: borderRadius,
      fontWeight: "bold",
      fontSize: "28px",
      lineHeight: "38px",

      "&:hover": {
        color: primaryColor,
        background: secondColor,
        borderRadius: borderRadius,
        fontWeight: "bold",
        fontSize: "28px",
        lineHeight: "38px",
      },
    };
    return obj;
  }

  const renderSignupForm = () => (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              type="email"
              name="email"
              variant="standard"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <TextField
              type="password"
              name="password"
              label="Mật khẩu"
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <Button
              type="submit"
              disabled={isSubmitting}
              sx={{
                color: "#fff",
                background: "#313131",
                "&:hover": {
                  color: "#fff",
                  background: "#313131",
                },
              }}
            >
              Đăng ký
            </Button>
          </form>
        )}
      </Formik>
    </>
  );

  const renderLoginForm = () => (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              type="email"
              name="email"
              variant="standard"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <TextField
              type="password"
              name="password"
              label="Mật khẩu"
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <Button
              type="submit"
              disabled={isSubmitting}
              sx={{
                color: "#fff",
                background: "#313131",
                "&:hover": {
                  color: "#fff",
                  background: "#313131",
                },
              }}
            >
              Đăng nhập
            </Button>
          </form>
        )}
      </Formik>
    </>
  );

  return (
    <div className="login">
      <div className="login--form">
        <div className="button--group">
          {loginOn ? (
            <>
              <Button
                onClick={() => setLoginOn(true)}
                sx={buttonStyle("#313131", "#fff", "12px 0", "1rem 0")}
              >
                Đăng nhập
              </Button>
              <Button
                onClick={() => setLoginOn(false)}
                sx={buttonStyle("#fff", "#313131", "0 12px", "1rem 0")}
              >
                Đăng ký
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => setLoginOn(true)}
                sx={buttonStyle("#fff", "#313131", "12px 0", "1rem 0")}
              >
                Đăng nhập
              </Button>
              <Button
                onClick={() => setLoginOn(false)}
                sx={buttonStyle("#313131", "#fff", "0 12px", "1rem 0")}
              >
                Đăng ký
              </Button>
            </>
          )}
        </div>
        {loginOn ? renderLoginForm() : renderSignupForm()}
      </div>

      <div className="authentication--section">
        <Button
          variant="outlined"
          sx={{
            color: "#313131",
            borderColor: "#313131",
            "&:hover": {
              color: "#313131",
              borderColor: "#313131",
            },
          }}
        >
          Facebook
        </Button>
        <Button variant="outlined">Google</Button>
      </div>
    </div>
  );
};

export default Login;
