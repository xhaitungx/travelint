import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Formik } from "formik";
import axios from "axios";
import "./login.scss";
const Login = ({ login }) => {
  const [loginOn, setLoginOn] = useState(login);

  useEffect(() => {
    loginOn ? (document.title = "Đăng nhập") : (document.title = "Đăng ký");
  });

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

  const navigate = useNavigate();

  const createLoginRequest = (values, type) => {
    const getCustomerID = (accountID) => {
      axios
        .get("https://tour-api-dev.herokuapp.com/khachhang")
        .then(({ data }) => {
          const customerDataByID = data.filter(
            (customer) => customer.id_tai_khoan?.["_id"] === accountID
          );
          const customerID = customerDataByID.map((item) => item["_id"]);
          console.log(
            "🚀 ~ file: Login.jsx ~ line 48 ~ .then ~ customerID",
            customerID
          );
        });
    };

    axios
      .get(`https://tour-api-dev.herokuapp.com/taikhoan/${values.email}`)
      .then(({ data }) => {
        if (data == null) alert("Tài khoản hoặc mật khẩu không đúng");
        else {
          if (data.password === values.password) {
            getCustomerID(data["_id"]);
          } else alert("Mật khẩu không đúng");
          navigate("");
        }
      })
      .catch((err) => console.log(err));
  };

  const createRegisterRequest = (values, type) => {
    axios
      .post("https://tour-api-dev.herokuapp.com/khachhang", {
        username: values.email,
        password: values.password,
      })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  const renderForm = () => (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            // setSubmitting(false);
            console.log(values.email);
            console.log(values.password);

            if (loginOn) createLoginRequest(values, "login");
            else createRegisterRequest(values, "resgister");
          });
          setSubmitting(false);
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
              type="text"
              name="email"
              variant="standard"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {/* {errors.email && touched.email && errors.email} */}
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
              {loginOn ? "Đăng nhập" : "Đăng ký"}
            </Button>
          </form>
        )}
      </Formik>
    </>
  );

  // const renderLoginForm = () => (
  //   <>
  //     <Formik
  //       initialValues={{ email: "", password: "" }}
  //       validate={(values) => {
  //         const errors = {};
  //         if (!values.email) {
  //           errors.email = "Required";
  //         } else if (
  //           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  //         ) {
  //           errors.email = "Invalid email address";
  //         }
  //         return errors;
  //       }}
  //       onSubmit={(values, { setSubmitting }) => {
  //         setTimeout(() => {
  //           alert(JSON.stringify(values, null, 2));
  //           setSubmitting(false);
  //         }, 400);
  //       }}
  //     >
  //       {({
  //         values,
  //         errors,
  //         touched,
  //         handleChange,
  //         handleBlur,
  //         handleSubmit,
  //         isSubmitting,
  //         /* and other goodies */
  //       }) => (
  //         <form className="form" onSubmit={handleSubmit}>
  //           <TextField
  //             type="email"
  //             name="email"
  //             variant="standard"
  //             label="Email"
  //             onChange={handleChange}
  //             onBlur={handleBlur}
  //             value={values.email}
  //           />
  //           {errors.email && touched.email && errors.email}
  //           <TextField
  //             type="password"
  //             name="password"
  //             label="Mật khẩu"
  //             variant="standard"
  //             onChange={handleChange}
  //             onBlur={handleBlur}
  //             value={values.password}
  //           />
  //           {errors.password && touched.password && errors.password}
  //           <Button
  //             type="submit"
  //             disabled={isSubmitting}
  //             sx={{
  //               color: "#fff",
  //               background: "#313131",
  //               "&:hover": {
  //                 color: "#fff",
  //                 background: "#313131",
  //               },
  //             }}
  //           >
  //             Đăng nhập
  //           </Button>
  //         </form>
  //       )}
  //     </Formik>
  //   </>
  // );

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
        {renderForm()}
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
