import React from "react";
import CustomButton from "../../../Components/CustomButton";

function FormWrapper() {
  return (
    <div className="form-wrapper">
      <form>
        <div className="input-group-wrapper">
          <input
            style={{ width: "45%" }}
            type="text"
            class="custom-input"
            placeholder="Your Name"
          />
          <input
            style={{ width: "45%" }}
            type="text"
            class="custom-input"
            placeholder="Enter Email"
          />
        </div>
        <input
          style={{ width: "100%" }}
          type="text"
          class="custom-input"
          placeholder="Enter Phone Number"
        />
        <input
          style={{ width: "100%" }}
          type="text"
          class="custom-input"
          placeholder="Enter Company Name"
        />

        <select class="custom-select" style={{ width: "100%" }}>
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>

        <CustomButton
          style={{ width: "fit-content" }}
          label="Next"
          type="solid"
        />
      </form>
    </div>
  );
}

export default FormWrapper;
