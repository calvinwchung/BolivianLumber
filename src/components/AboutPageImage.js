import { Parallax } from 'react-parallax';
import './AboutPageImage.css';

const AboutPageImage = ({picture, name}) => (
    <Parallax className='image' bgImage={picture} strength={800}>
        <div className='content'>
            <span className='img-txt'>{name}</span>
        </div>
    </Parallax>
);

export default AboutPageImage;