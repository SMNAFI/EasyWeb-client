import React from 'react';
import WhyCard from '../WhyCard/WhyCard';
import './WhyUs.css';
import team from '../../../images/team.png';
import strong from '../../../images/strong.png';
import solution from '../../../images/solution.png';

const cardData = [
    {
        title: 'Big experience',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem iste molestias amet, fugit perferendis quas sed, natus non suscipit exercitationem veniam pariatur saepe consequatur rem tenetur quia dolor cumque.',
        image: team
    }, {
        title: 'Strong team',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem iste molestias amet, fugit perferendis quas sed, natus non suscipit exercitationem veniam pariatur saepe consequatur rem tenetur quia dolor cumque.',
        image: strong
    }, {
        title: 'Personal solutions',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem iste molestias amet, fugit perferendis quas sed, natus non suscipit exercitationem veniam pariatur saepe consequatur rem tenetur quia dolor cumque.',
        image: solution
    }
]

const WhyUs = () => {
    return (
        <section className="d-flex align-items-center why-container" id="whyUs">
            <div>
                <div className="mb-5">
                    <h1 className="text-center">
                        Why <span className="brand-color">Choose</span> Us
                    </h1>
                    <p className="text-center">Biggest brands in the world recommend our company as a reliable website developer</p>
                </div>
                <div className="row pt-3">
                    {
                        cardData.map((data, index) => <WhyCard data={data} key={index}></WhyCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default WhyUs;