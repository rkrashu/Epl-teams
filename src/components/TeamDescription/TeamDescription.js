import React from 'react';
import './teamDescription.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const TeamDescription = (props) => {
    const {strDescriptionEN, strFacebook, strTwitter, strYoutube} = props.teamDetail
    console.log(props.teamDetail)
    return (
        <div className='container'>
            <div>
            <p> {strDescriptionEN}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut quibusdam iste repellat quam non, mollitia, quia sint dolore aperiam molestias vitae, odio eius necessitatibus veritatis provident ratione fuga pariatur!
            Delectus minus vitae voluptates! Nobis officiis dolorem, voluptate dolores, blanditiis recusandae rem natus cumque praesentium laboriosam vel nemo eaque dignissimos, inventore possimus ipsa fuga expedita repellat atque est earum mollitia?
            Excepturi vel eligendi libero quo provident nihil possimus illum quaerat ea officia. Soluta pariatur voluptas voluptatem explicabo aut vel dignissimos reprehenderit, tempora optio culpa dicta, saepe assumenda mollitia eos atque!
            A, eum quibusdam. Facilis nesciunt delectus impedit ratione beatae soluta, voluptatum illo fugit magnam voluptate. Eum ipsam asperiores laudantium nesciunt. Veniam facere consectetur a quidem inventore porro amet at atque.
            Dicta iure alias sed voluptas amet earum deserunt ipsum quas exercitationem accusantium atque distinctio ratione laboriosam, suscipit iste modi? Modi, inventore mollitia eius deleniti suscipit dolor incidunt fuga eaque ut?</p>
            </div>
            <div className="text-center p-5">
                    <span><strong>Share:</strong></span>
                    <a href="https://www.facebook.com"><FontAwesomeIcon className="social-icon" icon={faFacebookF} /></a>
                    <a href="https://twitter.com"><FontAwesomeIcon className="social-icon" icon={faTwitter} /></a>
                    <a href="https://www.youtube.com"><FontAwesomeIcon className="social-icon" icon={faYoutube} /></a>
                </div>
        </div>
    );
};

export default TeamDescription;