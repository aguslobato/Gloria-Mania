import Carousel from "../../components/carousel/Carousel";
import './Home.css'

function Home () {
    return (
        <>
            <div className="Home">
                
                <Carousel/>

                <section className="py-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="content-icon">
                                    <div className="content-icon-head">
                                        <span className="icon-medium"><i class="bi bi-house"></i></span>
                                    </div>
                                    <div className="content-icon-body">
                                        <h4>COMPRA DESDE TU CASA</h4>
                                        <p>Nosotros enviamos tu pedido</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="content-icon border-mx">
                                    <div className="content-icon-head">
                                        <span className="icon-medium"><i class="bi bi-credit-card-2-back"></i></span>
                                    </div>
                                    <div className="content-icon-body">
                                        <h4>BENEFICIOS EXCLUSIVOS</h4>
                                        <p>Con Tarjeta Macro</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="content-icon">
                                    <div className="content-icon-head">
                                        <span className="icon-medium"><i class="bi bi-lock"></i></span>
                                    </div>
                                    <div className="content-icon-body">
                                        <h4>COMPRA CON SEGURIDAD</h4>
                                        <p>Tus datos siempre protegidos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </section>

                <section className="py-4 my-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-xl-4">
                                <a href="" className="bg-futbol">
                                    <div className="bg-light-black">
                                        <h3>Futbol</h3>
                                        <span className="link-bg-red">Elegi tu indumentaria</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4">
                                <a href="" className="bg-infantil">
                                    <div className="bg-light-black">
                                        <h3>Infantil</h3>
                                        <span className="link-bg-red">Ver productos</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4">
                                <a href="" className="bg-basquet">
                                    <div className="bg-light-black">
                                        <h3>Basquet</h3>
                                        <span className="link-bg-red">Comprar</span>
                                    </div>
                                </a>
                            </div>                        
                        </div>
                    </div>                    
                </section>

                <section className="py-3 my-3">
                    <div className="container">
                        <div className="row">
                            .col-12.col
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}
export default Home;