import React from 'react';
import './specialCard.css'

export const SpecialCard = () => {
    return (
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col-md-12">
                    <img src="/main_pics/crousel_pic.avif" alt="styles" className="img-fluid" />
                </div>
            </div>

            <div className="row mt-5 justify-content-center">
                <div className="col-md-6 mt-5">
                    <img src="https://image.hm.com/assets/hm/cc/b1/ccb1ef84a84c8ea8b7d3296d08449baf9c7fee92.jpg?imwidth=1260" alt="styles" className="img-fluid" />
                    <h6>Style</h6>
                    <p className='price'>450 RS</p>
                </div>
                <div className="col-md-6 mt-5">
                    <img src="https://image.hm.com/assets/hm/cc/b1/ccb1ef84a84c8ea8b7d3296d08449baf9c7fee92.jpg?imwidth=1260" alt="styles" className="img-fluid" />
                    <h6>Style</h6>
                    <p className='price'>450 RS</p>
                </div>
                <h1>
                    Loli Bahia wears H&M Studio A/W 2024, an assertive new collection defined by its versatility and confidence.
                </h1>
                <div className="col-md-6 mt-5">
                    <img src="https://image.hm.com/assets/hm/cc/b1/ccb1ef84a84c8ea8b7d3296d08449baf9c7fee92.jpg?imwidth=1260" alt="styles" className="img-fluid" />
                    <h6>Style</h6>
                    <p className='price'>450 RS</p>
                </div>
            </div>
        </div>
    );
}