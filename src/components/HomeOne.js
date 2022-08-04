import { Parallax } from 'react-parallax';
import Wood1 from '../app/assets/wood1.png';

const HomeOne = () => (
    <Parallax className='image' bgImage={Wood1} strength={800}>
        <div className='content'>
            <span className='img-txt'>BOLIVIA</span>
        </div>
    </Parallax>
);

export default HomeOne;