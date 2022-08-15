import AboutPageImage from "../components/AboutPageImage";
import AboutTextBox1 from "../components/AboutTextBox1";
import AboutTextBox2 from "../components/AboutTextBox2";
import AboutTextBox3 from "../components/AboutTextBox3";
import Wood1 from '../app/assets/wood1.png';
import Wood2 from '../app/assets/wood2.png';
import Wood3 from '../app/assets/wood3.png';

const AboutPage = () => {
    return (
        <div>
            <AboutPageImage picture={Wood1} name='OUR STORY' />
            <AboutTextBox1 />
            <AboutPageImage picture={Wood2} name='OUR SERVICE' />
            <AboutTextBox2 />
            <AboutPageImage picture={Wood3} name='LOCATION' />
            <AboutTextBox3 />
        </div>
    )
};

export default AboutPage;