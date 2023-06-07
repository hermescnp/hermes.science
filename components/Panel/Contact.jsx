import React from "react";
import { Socialmedia } from "./Socialmedia"
import '../../styles/Contact.css'

export const Contact = () => {
    return (
        <section id="ContactSection">
            <h4 className="SkillSectionTittle">Contact me</h4>

            <div id="ContactInfoContainer">
                <p>Physical residence at:</p>
                <p>
                    Dominican Republic
                    <br />
                    Santo Domingo, Distrito Nacional
                </p>
                <div id="mapContainer">
                    <p>MAPS</p>
                </div>
                <p>Phone number: +1 (809) 350 5787</p>
                <p>E-mail: hermes.cnp@gmail.com</p>
            </div>

            <Socialmedia />

        </section>
    )
}