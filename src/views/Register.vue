<template>
<div>
  <h2>B3</h2>
  <div class="container">
    <div class="form-box">
      <h2>Create account</h2>

      <form>
        <div class="form-group">
          <label for="email">Your email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="name@company.com" 
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="confirm-password">Confirm password</label>
          <input 
            type="password" 
            id="confirm-password" 
            class="form-input"
          />
        </div>

        <button type="submit" class="btn">Create an account</button>
      </form>

      <p class="login-link">
        Already have an account? 
        <a href="#">Login here</a>
      </p>
    </div>
  </div>
</div>
  
</template>

<script>

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;
}

.form-box {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

h2 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: #3b82f6;
  outline: none;
}

.btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2563eb;
}

.login-link {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.login-link a {
  color: #3b82f6;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
