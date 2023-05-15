import React from 'react'

export default function Home() {
  return (
    <div className="container-fluid p-3 bg-info text-white text-right">
        <h1>Welcome to Website name</h1>
        <div>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner text-center">
                    
                    <div class="carousel-item active">
                        <img src="/images/001.jpg" class="d-block w-100" width="1500"  height="500" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/images/002.jpg" class="d-block w-100" width="1500"  height="500"  alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/images/003.jpg" class="d-block w-100" width="1500"  height="500" alt="..." />
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
            <div className="col-sm-12 text-right">
                <h3>Aboutme</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
        </div>
    
    </div>

    
  )
}
