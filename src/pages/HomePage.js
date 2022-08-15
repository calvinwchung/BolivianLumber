import ParallaxScroll from '../components/Parallax';
import Forest1 from '../app/assets/forest1.jpeg';
import Forest2 from '../app/assets/forest2.jpeg';
import Forest3 from '../app/assets/forest3.jpeg';

const HomePage = () => {
    return (
        <div>
            <ParallaxScroll picture={Forest1} name='BOLIVIA' nav='/about' />
            <ParallaxScroll picture={Forest2} name='SHOP' nav='/inventory' />
            <ParallaxScroll picture={Forest3} name='CONTACT US' nav='/contact' />
        </div>
        )
};

export default HomePage;