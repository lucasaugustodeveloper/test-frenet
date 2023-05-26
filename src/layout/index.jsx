/* eslint-disable react/prop-types */
const Layout = ({ children }) => (
  <>
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">Quotes</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link">Quotes</a>
              </li>
              <li className="nav-item">
                <a href="/user" className="nav-link">User</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <main className="container my-5">
      {children}
    </main>
  </>
)

export default Layout
