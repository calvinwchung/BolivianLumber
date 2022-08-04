import { Parallax } from 'react-parallax';
import Wood3 from '../app/assets/wood3.png';

const HomeThree = () => (
    <Parallax className='image' bgImage={Wood3} strength={800}>
        <div className='content'>
            <span className='img-txt'>LOCATION</span>
        </div>
    </Parallax>
);

export default HomeThree;