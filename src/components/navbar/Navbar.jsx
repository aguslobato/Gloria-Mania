import Carousel from "../carousel/Carousel";

function Navbar() {
    return  (
        <>
            <header className="header-fix">
                <div className="bg-black text-center py-1 c-white"><span>Hacemos envios a todo el pais</span></div>
                <nav class="navbar navbar-expand-lg flex-column">
                    <div className="nav-top d-flex justify-content-evenly container">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            </form>
                            <a href=""><img src="https://acdn-us.mitiendanube.com/stores/001/167/350/themes/common/logo-1259477434-1589377237-bc0831e72523e37c26ca22df4fa7229e1589377237-480-0.webp" alt="logo Gloria Mania" className="logo" /></a>
                            <ul className="nav">
                                <li className="nav-item"><a href="" className="nav-link link-black">CREAR CUENTA</a></li>
                                <li className="nav-item px-0 mx-0"><span>|</span></li>
                                <li className="nav-item"><a href="" className="nav-link link-black">INICIAR SESION</a></li>
                                <li className="nav-item"><a href="" className="nav-link link-black item-small-icon"><span><i class="bi bi-cart3"></i></span></a></li>
                            </ul>
                    </div>
                    <div className="nav-bottom container">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav mx-auto mt-2">
                                <li class="nav-item"><a class="nav-link link-red" href="#">FUTBOL</a></li>
                                <li class="nav-item"><a class="nav-link link-red" href="#">BASQUET</a></li>
                                <li class="nav-item"><a class="nav-link link-red" href="#">HOMBRE</a></li>
                                <li class="nav-item"><a class="nav-link link-red" href="#">MUJERES</a></li>
                                <li class="nav-item"><a class="nav-link link-red" href="#">NIÑOS</a></li>
                                <li class="nav-item"><a class="nav-link link-red" href="#">MERCHANDISING</a></li>
                                <li class="nav-item"><a class="nav-link link-red" href="#">ACCESORIOS</a></li>
                                <li class="nav-item"><a class="nav-link link-red" href="#">OUTLET</a></li>
                                <li class="nav-item"><a class="nav-link link-red" href="#">COTILLON</a></li>
                                <li class="nav-item"><a class="nav-link link-red" href="#">GIFT CARD</a></li>
                                <li class="nav-item"><a class="nav-link link-red" href="#">COMO COMPRAR</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>                
            </header>
        </>
    )
}

export default Navbar;