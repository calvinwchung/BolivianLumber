import { Parallax } from 'react-parallax';
import Wood2 from '../app/assets/wood2.png';

const AboutTwo = () => (
    <Parallax className='image' bgImage={Wood2} strength={800}>
        <div className='content'>
            <span className='img-txt'>OUR SERVICE</span>
        </div>
    </Parallax>
);

export default AboutTwo;