import { Parallax } from 'react-parallax';
import Wood2 from '../app/assets/wood2.png';

const InventoryOne = () => (
    <Parallax className='image' bgImage={Wood2} strength={800}>
        <div className='content'>
            <span className='img-txtt'>EXOTIC LUMBER</span>
        </div>
    </Parallax>
);

export default InventoryOne;