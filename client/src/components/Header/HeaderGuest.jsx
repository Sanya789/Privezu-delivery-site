



const HeaderGuest = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{justifyContent: 'center'}}>
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Главная</a>
        <a className="nav-link" href="#">Цены</a>
        <a className="nav-link" href="#">Автопарк</a>
        <a className="nav-link" href="#">Войти</a>

      </div>
    </div>
  </div>
</nav>
  )
}


export default HeaderGuest
