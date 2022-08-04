import { Parallax } from 'react-parallax';
import Wood1 from '../app/assets/wood1.png';

const AboutOne = () => (
    <Parallax className='image' bgImage={Wood1} strength={800}>
        <div className='content'>
            <span className='img-txt'>OUR STORY</span>
        </div>
    </Parallax>
);

export default AboutOne;