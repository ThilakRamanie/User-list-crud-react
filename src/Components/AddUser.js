import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../Slice/userSlice";
// import { useSelector } from "react-redux";
// import { selectUsers } from "../Slice/userSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function AddUser() {
//   const users = useSelector(selectUsers);
  const navigate = useNavigate("/");
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "Male",
    skills: ["Other"],
    city: "City 1",
    date_of_birth: "",
    photo: "",
    mobile: "",
  });
//   useEffect(() => {
//     console.log(users);
//   }, [users]);
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    // console.log(value);
    const isChecked = event.target.checked;

    if (isChecked) {
      // If checkbox is checked, add the value to the selectedValues array
      setValues({ ...values, skills: [...values.skills, value] });
    } else {
      // If checkbox is unchecked, remove the value from the selectedValues array
      setValues({
        ...values,
        skills: values.skills.filter((v) => v !== value),
      });
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // Set the preview image when the file is successfully loaded
        setValues({ ...values, photo: e.target.result });
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    // const form = event.currentTarget;
    // console.log(form.checkValidity());
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    // }
    // dispatch(addUser(values));
    // setValidated(true);
    // setValues({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   gender: "Male",
    //   skills: ["Other"],
    //   city: "City 1",
    //   date_of_birth: "",
    //   photo: "",
    //   mobile: "",
    // });
    // navigate("/");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch(addUser({ id: uuidv4(), ...values }));
      setValidated(true);
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        gender: "Male",
        skills: ["Other"],
        city: "City 1",
        date_of_birth: "",
        photo: "",
        mobile: "",
      });
      navigate("/");
    }

    setValidated(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
      }}
    >
      <Container
        className="mt-2"
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>Add User</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                value={values.firstName}
                onChange={(e) => {
                  setValues({ ...values, firstName: e.target.value });
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide the first name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                value={values.lastName}
                onChange={(e) => {
                  setValues({ ...values, lastName: e.target.value });
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide the last name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  value={values.email}
                  required
                  onChange={(e) => {
                    setValues({ ...values, email: e.target.value });
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                value={values.mobile}
                type="tel"
                placeholder="Mobile"
                required
                onChange={(e) => {
                  setValues({ ...values, mobile: e.target.value });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid mobile number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>
                Photo&nbsp;<i>{values.photo && (<i>Photo uploaded</i>)}</i>
              </Form.Label>
              <Form.Control
                type="file"
                placeholder="State"
                accept="image/*"
                required
                onChange={handleFileChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid photo.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom06">
              <Form.Label>City</Form.Label>
              <Form.Select
                value={values.city}
                aria-label="City"
                onChange={(e) => {
                  setValues({ ...values, city: e.target.value });
                }}
                required
                isInvalid={false}
              >
                <option value="City 1">City 1</option>
                <option value="City 2">City 2</option>
                <option value="City 3">City 3</option>
                <option value="City 4">City 4</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom07">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                value={values.date_of_birth}
                onChange={(e) => {
                  setValues({ ...values, date_of_birth: e.target.value });
                }}
                type="date"
                placeholder="Date of Birth"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid date.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom08">
              <Form.Label>Gender</Form.Label>
              <br />
              <Form.Check
                inline
                label="Male"
                value="Male"
                name="group1"
                type="radio"
                id={`inline-radio-1`}
                checked={values.gender === "Male"}
                onChange={(e) => {
                  setValues({ ...values, gender: e.target.value });
                }}
              />
              <Form.Check
                inline
                label="Female"
                value="Female"
                name="group1"
                type="radio"
                id={`inline-radio-2`}
                checked={values.gender === "Female"}
                onChange={(e) => {
                  setValues({ ...values, gender: e.target.value });
                }}
              />
              <br />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom09">
              <Form.Label>Skills</Form.Label>
              <br />
              <Form.Check
                inline
                label="Communication"
                name="Communication"
                value="Communication"
                type="checkbox"
                id={`inline-check-1`}
                checked={values.skills.includes("Communication")}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                inline
                label="Presentation"
                name="Presentation"
                value="Presentation"
                type="checkbox"
                id={`inline-check-2`}
                checked={values.skills.includes("Presentation")}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                inline
                label="Technical"
                name="Technical"
                value="Technical"
                checked={values.skills.includes("Technical")}
                type="checkbox"
                id={`inline-check-3`}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                inline
                label="Other"
                name="Other"
                value="Other"
                checked={values.skills.includes("Other")}
                type="checkbox"
                id={`inline-check-4`}
                onChange={handleCheckboxChange}
              />
              <br />
            </Form.Group>
          </Row>

            <Button className="ml-2" type="submit" variant="success">
              Submit form
            </Button>
            {/* <Button style={{marginLeft:'10px'}} variant="outline-dark" type="button">
              Clear form
            </Button> */}
        </Form>
      </Container>
    </div>
  );
}

export default AddUser;
