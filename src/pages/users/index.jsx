import { useFormik } from 'formik'

import { saveUser } from '../../services/users'

function User() {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      phone: ''
    },
    onSubmit: data => {
      const transformValues = {
        firstname: data.firstName,
        lastname: data.lastName,
        username: data.userName,
        email: data.email,
        password: data.password,
        phone: data.phone,
        userstatus: 2
      }

      saveUser(transformValues)
        .then(res => console.log('res => ', res.data))
    }
  })

  return (
    <main className="container">
      <h1>Create User</h1>

      <form>
        <div className="row">
          <div className="col-6 col-md-4 mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder="John Wick"
              required
              onChange={handleChange}
              value={values.firstName}
            />
          </div>

          <div className="col-6 col-md-4">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Baba Yaga"
              required
              onChange={handleChange}
              value={values.lastName}
            />
          </div>

          <div className="col-12 col-md-4 mt-2">
            <label htmlFor="userName" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              placeholder="JohnWickBabaYaga"
              required
              onChange={handleChange}
              value={values.userName}
            />
          </div>

          <div className="col-12 col-md-4 mt-2">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="johnwick@mail.com"
              required
              onChange={handleChange}
              value={values.email}
            />
          </div>

          <div className="col-12 col-md-4 mt-2">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
              value={values.password}
            />
          </div>

          <div className="col-12 col-md-4 mt-2">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              placeholder="00 00000-0000"
              required
              onChange={handleChange}
              value={values.phone}
            />
          </div>
        </div>

        <button
          className="btn btn-primary mt-3"
          type="button"
          onClick={handleSubmit}
        >
          Create user
        </button>
      </form>
    </main>
  )
}

export default User
