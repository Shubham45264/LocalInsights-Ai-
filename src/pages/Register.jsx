import React from 'react';

const RegistrationPage = () => {
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h1 style={styles.title}>Register for LocalInsights AI</h1>
        <p style={styles.subtitle}>Help us understand your business better.</p>

        {/* Full Name */}
        <label style={styles.label}>Full Name</label>
        <input type="text" placeholder="John Doe" style={styles.input} />

        {/* Email */}
        <label style={styles.label}>Email Address</label>
        <input type="email" placeholder="you@example.com" style={styles.input} />

        {/* Password */}
        <label style={styles.label}>Password</label>
        <input type="password" placeholder="********" style={styles.input} />

        {/* Confirm Password */}
        <label style={styles.label}>Confirm Password</label>
        <input type="password" placeholder="********" style={styles.input} />

        

        {/* Terms */}
        <div style={styles.checkboxGroup}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" style={styles.checkboxLabel}>
            I agree to the Terms and Conditions
          </label>
        </div>

        {/* Register Button */}
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#FFEBEE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',
  },
  title: {
    fontSize: '28px',
    marginBottom: '10px',
    color: '#D32F2F',
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '30px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    marginTop: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    fontSize: '14px',
  },
  checkboxGroup: {
    marginTop: '20px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: '8px',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#D32F2F',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    width: '100%',
    fontSize: '16px',
    cursor: 'pointer',
  }
};

export default RegistrationPage;

