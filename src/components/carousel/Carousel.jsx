
function Carousel () {
    return (
        <>
            <div className="carousel">
                <div className="container">
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://acdn-us.mitiendanube.com/stores/001/167/350/themes/new_linkedman/2-slide-1761857986667-3440538302-ebdcc1abbdd3be3a26f4978cd9fb9d621761857989-1920-1920.webp?1933960911" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://acdn-us.mitiendanube.com/stores/001/167/350/themes/new_linkedman/2-slide-1763477107539-8740092359-27ac57cd028d35e90cabe962d40793041763477109-1920-1920.webp?1933960911" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://acdn-us.mitiendanube.com/stores/001/167/350/themes/new_linkedman/2-slide-1762971727266-8233390490-fa2424b5cff32dc9e74f7305b244e0311762971730-1920-1920.webp?1933960911" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://acdn-us.mitiendanube.com/stores/001/167/350/themes/new_linkedman/2-slide-1763477107539-4228203379-c0ef4d0a862e0cce732ff70af33adac71763477110-1920-1920.webp?1933960911" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://acdn-us.mitiendanube.com/stores/001/167/350/themes/new_linkedman/2-slide-1761756868047-170740518-9f33f52a11e57640551c0f4b50f1efcb1761756869-1920-1920.webp?1933960911" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>                    
                </div>
            </div>
        </>
    )
}
export default Carousel;