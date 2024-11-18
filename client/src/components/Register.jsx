import React, { useContext, useState } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import './Register.css';

const Register = ({ setIsLogin }) => {
  const {
    setUsername,
    setEmail,
    setPassword,
    setUsertype,
    usertype,
    setRestaurantAddress,
    setRestaurantImage,
    register,
  } = useContext(GeneralContext);

  const [restaurantImagePreview, setRestaurantImagePreview] = useState('');
  const [restaurantImageUrl, setRestaurantImageUrl] = useState(''); // New state for image URL input

  const handleRegister = async (e) => {
    e.preventDefault();
    // If an image URL is provided, use it; otherwise, use the uploaded image
    const image = restaurantImageUrl ? restaurantImageUrl : restaurantImagePreview;
    setRestaurantImage(image);  // Set the restaurant image based on the provided URL or uploaded file
    await register();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRestaurantImage(reader.result);
        setRestaurantImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form-container">
        <form className="authForm" onSubmit={handleRegister}>
          <h2>Register</h2>
          <div className="form-floating mb-3 authFormInputs">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating mb-3 authFormInputs">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3 authFormInputs">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            onChange={(e) => setUsertype(e.target.value)}
          >
            <option value="">User type</option>
            <option value="admin">Admin</option>
            <option value="restaurant">Restaurant</option>
            <option value="customer">Customer</option>
          </select>

          {usertype === 'restaurant' && (
            <>
              <div className="form-floating mb-3 authFormInputs">
                <input
                  type="text"
                  className="form-control"
                  id="floatingAddress"
                  placeholder="Address"
                  onChange={(e) => setRestaurantAddress(e.target.value)}
                />
                <label htmlFor="floatingAddress">Address</label>
              </div>
              
              {/* Option to upload restaurant image or provide a URL */}
              <div className="mb-3 authFormInputs">
                <label htmlFor="restaurantImage" className="form-label">Restaurant Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="restaurantImage"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              
              {/* Input field for restaurant image URL */}
              <div className="form-floating mb-3 authFormInputs">
                <input
                  type="text"
                  className="form-control"
                  id="restaurantImageUrl"
                  placeholder="Enter Image URL"
                  value={restaurantImageUrl}
                  onChange={(e) => setRestaurantImageUrl(e.target.value)}  // Update state with URL input
                />
                <label htmlFor="restaurantImageUrl">Or provide Image URL</label>
              </div>
              
              {/* Display preview of image */}
              {restaurantImagePreview && (
                <div className="image-preview mb-3">
                  <img
                    src={restaurantImagePreview}
                    alt="Restaurant Preview"
                    className="thumbnail-preview"
                    style={{ maxWidth: '200px', maxHeight: '200px' }}
                  />
                </div>
              )}
              {restaurantImageUrl && !restaurantImagePreview && (
                <div className="image-preview mb-3">
                  <img
                    src={restaurantImageUrl}
                    alt="Restaurant Preview"
                    className="thumbnail-preview"
                    style={{ maxWidth: '200px', maxHeight: '200px' }}
                  />
                </div>
              )}
            </>
          )}

          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
          <p>
            Already registered?{' '}
            <span onClick={() => setIsLogin(true)}>Login</span>
          </p>
        </form>
      </div>
      <div className="register-image-container">
        <img
          src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
          alt="Registration Illustration"
        />
      </div>
    </div>
  );
};

export default Register;
