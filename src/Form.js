import React, { useState, useRef } from 'react';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Close } from '@mui/icons-material';
const Form = () => {
  const formFieldsRef = useRef({}); // Ref to store field references

  const [formFields, setFormFields] = useState({
    // form field values
  });

  const [formErrors, setFormErrors] = useState({
    // form field errors
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    console.log("handle")
    event.preventDefault();
    // form submission logic

    // Validate the form before submitting
    const isValid = validateForm();
    if (isValid) {
      // Perform form submission
      // ...
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate locationName
    if (!formFields.locationName) {
      errors.locationName = 'Location Name is required';
      addFieldError('locationName');
    } else {
      removeFieldError('locationName');
    }

    // Validate unitNumber
    if (!formFields.unitNumber) {
      errors.unitNumber = 'Unit # is required';
      addFieldError('unitNumber');
    } else {
      removeFieldError('unitNumber');
    }

    // Validate locationPhone
    if (!formFields.locationPhone) {
      errors.locationPhone = 'Location Phone No is required';
      addFieldError('locationPhone');
    } else {
      removeFieldError('locationPhone');
    }

    // Validate locationDescription
    if (!formFields.locationDescription) {
      errors.locationDescription = 'Location Description is required';
      addFieldError('locationDescription');
    } else {
      removeFieldError('locationDescription');
    }

    // Validate locationEmail
    if (!formFields.locationEmail) {
      errors.locationEmail = 'Location Email is required';
      addFieldError('locationEmail');
    } else {
      removeFieldError('locationEmail');
    }

    // Validate assigningManager
    if (!formFields.assigningManager) {
      errors.assigningManager = 'Assigning Manager is required';
      addFieldError('assigningManager');
    } else {
      removeFieldError('assigningManager');
    }

    // Validate openingDate
    if (!formFields.openingDate) {
      errors.openingDate = 'Opening Date is required';
      addFieldError('openingDate');
    } else {
      removeFieldError('openingDate');
    }

    // Validate franchiseeName
    if (!formFields.franchiseeName) {
      errors.franchiseeName = 'Franchisee Name is required';
      addFieldError('franchiseeName');
    } else {
      removeFieldError('franchiseeName');
    }

    // Validate status
    if (!formFields.status) {
      errors.status = 'Status is required';
      addFieldError('status');
    } else {
      removeFieldError('status');
    }
    if (!formFields.state) {
      errors.state = 'State is required';
      addFieldError('state');
    } else {
      removeFieldError('state');
    }
    // Validate address
    if (!formFields.address) {
      errors.address = 'Address is required';
      addFieldError('address');
    } else {
      removeFieldError('address');
    }

    // Validate address2
    if (!formFields.address2) {
      errors.address2 = 'Address 2 is required';
      addFieldError('address2');
    } else {
      removeFieldError('address2');
    }

    // Validate state
    // if (!formFields.state) {
    //   errors.state = 'State is required';
    //   addFieldError('state');
    // } else {
    //   removeFieldError('state');
    // }

    // Validate city
    if (!formFields.city) {
      errors.city = 'City is required';
      addFieldError('city');
    } else {
      removeFieldError('city');
    }

    // Validate zipcode
    if (!formFields.zipcode) {
      errors.zipcode = 'Zipcode is required';
      addFieldError('zipcode');
    } else {
      removeFieldError('zipcode');
    }

    // Validate taxId
    if (!formFields.taxId) {
      errors.taxId = 'Tax ID is required';
      addFieldError('taxId');
    } else {
      removeFieldError('taxId');
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const addFieldError = (fieldName) => {
    const fieldRef = formFieldsRef.current[fieldName];
    if (fieldRef) {
      // fieldRef.classList.add('field-error');
    }
  };

  const removeFieldError = (fieldName) => {
    const fieldRef = formFieldsRef.current[fieldName];
    if (fieldRef) {
      fieldRef.classList.remove('field-error');
    }
  };
  const handleFormClose = () => {
    // Logic to handle form close
    console.log('Form closed');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
      
        <Grid item xs={2}>
       
          
          </Grid> {/* Empty grid item for spacing on the left */}
        <Grid item xs={8}>

        <Grid container spacing={2} alignItems="center">
            <Grid item xs={5}>
              
            </Grid>
            <Grid item xs={4}>
              <Grid container justifyContent="flex-end">
              <Button onClick={handleFormClose}>
                <Close />
              </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={5}>
              <h1 className="add-location">Add Location</h1>
            </Grid>
            <Grid item xs={4}>
              <Grid container justifyContent="flex-end">
                <Button type="submit" variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Location Name"
                name="locationName"
                value={formFields.locationName}
                onChange={handleChange}
                error={!!formErrors.locationName}
                helperText={formErrors.locationName}
                fullWidth
                required
                inputRef={(ref) => (formFieldsRef.current.locationName = ref)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Unit #"
                name="unitNumber"
                value={formFields.unitNumber}
                onChange={handleChange}
                error={!!formErrors.unitNumber}
                helperText={formErrors.unitNumber}
                fullWidth
                required
                inputRef={(ref) => (formFieldsRef.current.unitNumber = ref)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Location Phone No"
                name="locationPhone"
                value={formFields.locationPhone}
                onChange={handleChange}
                error={!!formErrors.locationPhone}
                helperText={formErrors.locationPhone}
                fullWidth
                required
                inputRef={(ref) => (formFieldsRef.current.locationPhone = ref)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Location Description"
                name="locationDescription"
                value={formFields.locationDescription}
                onChange={handleChange}
                error={!!formErrors.locationDescription}
                helperText={formErrors.locationDescription}
                fullWidth
                required
                multiline
                rows={4}
                inputRef={(ref) => (formFieldsRef.current.locationDescription = ref)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Location Email"
                name="locationEmail"
                value={formFields.locationEmail}
                onChange={handleChange}
                error={!!formErrors.locationEmail}
                helperText={formErrors.locationEmail}
                fullWidth
                required
                inputRef={(ref) => (formFieldsRef.current.locationEmail = ref)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Assigning Manager"
                name="assigningManager"
                value={formFields.assigningManager}
                onChange={handleChange}
                error={!!formErrors.assigningManager}
                helperText={formErrors.assigningManager}
                fullWidth
                required
                inputRef={(ref) => (formFieldsRef.current.assigningManager = ref)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Opening Date"
                name="openingDate"
                value={formFields.openingDate}
                onChange={handleChange}
                error={!!formErrors.openingDate}
                helperText={formErrors.openingDate}
                fullWidth
                required
                inputRef={(ref) => (formFieldsRef.current.openingDate = ref)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Address"
                name="address"
                value={formFields.address}
                onChange={handleChange}
                error={!!formErrors.address}
                helperText={formErrors.address}
                fullWidth
                required
                inputRef={(ref) => (formFieldsRef.current.address = ref)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Address 2"
                name="address2"
                value={formFields.address2}
                onChange={handleChange}
                error={!!formErrors.address2}
                helperText={formErrors.address2}
                fullWidth
                required
                inputRef={(ref) => (formFieldsRef.current.address2 = ref)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth required error={!!formErrors.state}>
                <InputLabel id="state-label">State</InputLabel>
                <Select
                  labelId="state-label"
                  id="state-select"
                  value={formFields.state}
                  onChange={handleChange}
                  inputRef={(ref) => (formFieldsRef.current.state = ref)}
                >
                  <MenuItem value=""> state</MenuItem>
                  <MenuItem value="Active">Delhi</MenuItem>
                  <MenuItem value="Inactive">Indore</MenuItem>
                </Select>
                {formErrors.state && <span style={{ color: 'red' }}>{formErrors.state}</span>}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="City"
                name="city"
                value={formFields.city}
                onChange={handleChange}
                error={!!formErrors.city}
                helperText={formErrors.city}
                fullWidth
                required
                inputRef={(ref) => (formFieldsRef.current.city = ref)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth required error={!!formErrors.franchiseeName}>
                <InputLabel id="franchisee-label">Franchisee Name</InputLabel>
                <Select
                  labelId="franchisee-label"
                  id="franchisee-select"
                  value={formFields.franchiseeName}
                  onChange={handleChange}
                  inputRef={(ref) => (formFieldsRef.current.franchiseeName = ref)}
                >
                  <MenuItem value="">Select franchisee</MenuItem>
                  <MenuItem value="Franchisee A">Franchisee A</MenuItem>
                  <MenuItem value="Franchisee B">Franchisee B</MenuItem>
                </Select>
                {formErrors.franchiseeName && (
                  <span style={{ color: 'red' }}>{formErrors.franchiseeName}</span>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth required error={!!formErrors.status}>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  labelId="status-label"
                  id="status-select"
                  value={formFields.status}
                  onChange={handleChange}
                  inputRef={(ref) => (formFieldsRef.current.status = ref)}
                >
                  <MenuItem value="">Select status</MenuItem>
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
                {formErrors.status && <span style={{ color: 'red' }}>{formErrors.status}</span>}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Zipcode"
                name="zipcode"
                value={formFields.zipcode}
                onChange={handleChange}
                error={!!formErrors.zipcode}
                helperText={formErrors.zipcode}
                fullWidth
                required
                inputRef={(ref) => (formFieldsRef.current.zipcode = ref)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Tax ID"
                name="taxId"
                value={formFields.taxId}
                onChange={handleChange}
                error={!!formErrors.taxId}
                helperText={formErrors.taxId}
                fullWidth
                required
                inputRef={(ref) => (formFieldsRef.current.taxId = ref)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid> {/* Empty grid item for spacing on the right */}
      </Grid>
      <style>{`
        .field-error {
          border-color: red !important;
        }
        .add-location {
          color: blue;
        }
      `}</style>
    </form>
  );
};

export default Form;
