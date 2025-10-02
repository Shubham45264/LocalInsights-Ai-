import React from 'react';

const LoginPage = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.logo}>LocaInsights</div>
        <h2 style={styles.heading}>Welcome Back</h2>
        <p style={styles.subheading}>Enter your email and password to access your account.</p>

        <form style={styles.form}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            style={styles.input}
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            style={styles.input}
          />

          <div style={styles.options}>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" style={styles.link}>Forgot Your Password?</a>
          </div>

          <button type="submit" style={styles.loginBtn}>Log In</button>

          <div style={styles.divider}>Or Login With</div>

          <div style={styles.socialButtons}>
            <button style={styles.socialBtn}>Google</button>
            <button style={styles.socialBtn}>Apple</button>
          </div>

          <p style={styles.footerText}>
            Don’t Have An Account? <a href="#" style={styles.link}>Register Now.</a>
          </p>
        </form>
      </div>
    </div>
  );
};

// Red-themed centered styles
const styles = {
  wrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEBEE', // light red background
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    textAlign: 'left',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    fontSize: '14px',
  },
  loginBtn: {
    backgroundColor: '#D32F2F',
    color: '#fff',
    padding: '12px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '20px',
  },
  divider: {
    color: '#aaa',
    margin: '10px 0',
  },
  socialButtons: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  socialBtn: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  footerText: {
    fontSize: '14px',
  },
  link: {
    color: '#D32F2F',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default LoginPage;
