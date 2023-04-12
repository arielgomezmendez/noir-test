import RegisterForm from "@/components/RegisterForm/RegisterForm";
import React from "react";

const index = () => {
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default index;

/*import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import SecurityIcon from "@material-ui/icons/Security";

/*const useStyles = makeStyles({
  inputField: {
    fontSize: "16px",
    padding: "10px 10px 10px 38px",
    background: "#F7F7F7",
    border: "none",
    outline: "none",
    backgroundPositionX: "10px",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "18px",
  },
  icon: {
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
  },
});*/

/*export default function EmailInput() {
  const classes = useStyles();

  return (
    <TextField
      placeholder="Email"
      variant="outlined"
      InputProps={{
        className: classes.inputField,
        startAdornment: (
          <SecurityIcon className={classes.icon} fontSize="small" />
        ),
      }}
    />
  );
}*/
