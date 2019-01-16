import React, { Component } from 'react';
import PreviewButton from './PreviewButton';

class MainPreview extends Component {
    render() {
        return (
            <section className="cardSection">
                <div className="card">
                    <div className="card__wrapper" id="card__wrapper">
                        <div className="card__titles">
                            <h2 className="title__name">{this.props.name}</h2>
                            <p className="title__profession">{this.props.job}</p>
                        </div>
                        <div className="card__image" style={{backgroundImage: `url(${this.props.image})`}}></div>
                        <ul className="card__list card__contact-list">
                            <li className="contact-list__element contact-list__phone">
                            </li>
                            <li className="contact-list__element contact-list__mail">
                            </li>
                            <li className="contact-list__element contact-list__linkedin">
                            </li>
                            <li className="contact-list__element contact-list__github">
                            </li>
                        </ul>
                        <ul className="card__list card__skills-list" id="ul-skills">
                        </ul>
                        <PreviewButton />
                    </div>
                </div>
            </section>
        )
    }
}

export default MainPreview;