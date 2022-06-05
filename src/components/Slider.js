import React from 'react'

export default function Slider() {
    return (
        <div id="carouselExampleIndicators" className="carousel carousel-dark slide mt-4" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={2000}>
                    <img src="https://cdn0.fahasa.com/media/magentothem/banner7/quoctethieunhi_1.2_840x320.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src="https://cdn0.fahasa.com/media/magentothem/banner7/Ehon_840x320.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src="https://cdn0.fahasa.com/media/magentothem/banner7/zalo-osc-t6-840.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
