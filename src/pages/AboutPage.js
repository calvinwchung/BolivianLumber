import AboutPageImage from "../components/AboutPageImage";
import AboutTextBox from "../components/AboutTextBox/AboutTextBox";
import Wood1 from '../app/assets/wood1.png';
import Wood2 from '../app/assets/wood2.png';
import Wood3 from '../app/assets/wood3.png';

const AboutPage = () => {
    return (
        <div>
            <AboutPageImage picture={Wood1} name='OUR STORY' />
            <AboutTextBox title='BOLIVIA' paragraph='Based out of Bolivia, we have access to the most exotic lumber in the South American Bolivian jungle. We are a small family run lumber provider and strive to provide both quality and low prices. We are able to achieve this through making sure that our products are treated with the care and attention needed to keep the wood from being damaged. Additionally, our small but agile team is able to keep prices low with minimal overhead. If you want to look at our product offerings, please go to the inventory page. Our inventory will continue to grow to provide clients with whatever lumber/look is needed.' />
            <AboutPageImage picture={Wood2} name='OUR SERVICE' />
            <AboutTextBox title='LUMBER' paragraph='We strive for excellence. From harvesting to kiln drying to delivery and customer service, we make sure that our clients satisfaction is at the top of our mindset. We know that shopping for lumber can be a stressful venture and we do our best to make that process and easy as possible. Please feel free to email or call us with any questions or concerns and we will get back to you as soon as possible to relive any stress-points or questions. For contact information, please navigate to our contact page.' />
            <AboutPageImage picture={Wood3} name='LOCATION' />
            <AboutTextBox title='LOCATION' paragraph='Bolivian Jungle: Harvesting Point
            U.S.A. Operations: Philadelphia PA
            China Operations: Bolivia' />
        </div>
    )
};

export default AboutPage;