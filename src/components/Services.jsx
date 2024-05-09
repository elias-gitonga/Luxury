import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking , FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail />,
                title: "Free Cocktail",
                info: "Indulge in a tantalizing array of handcrafted cocktails, expertly concocted to elevate your stay. Sip and savor as you unwind in style, with each sip a journey into flavor paradise."
              },
              {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Embark on a journey of exploration amidst breathtaking natural landscapes. Traverse winding trails, lush forests, and majestic peaks, immersing yourself in the wonders of the great outdoors. Whether a seasoned hiker or a novice adventurer, there's a path for everyone to discover."
              },
              {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Seamlessly traverse between destinations with our complimentary shuttle service. Effortlessly navigate the local area, whether it's to explore nearby attractions, embark on shopping excursions, or simply venture into town for a taste of local culture and cuisine."
              },
              {
                icon: <FaBeer />,
                title: "Unlimited Beer",
                info: "Quench your thirst with our unlimited beer offering, where every pour promises refreshment and relaxation. From crisp lagers to robust ales, our selection caters to discerning palates, ensuring that every moment is accompanied by the perfect brew."
              },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}