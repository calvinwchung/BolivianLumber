import { Container } from 'reactstrap';
import Cuta from '../app/assets/cuta.png';
import Morado from '../app/assets/morado.png';
import Pauqio from '../app/assets/pauqio.png';
import Tajibo from '../app/assets/tajibo.png';
import Tarara from '../app/assets/tarara.png';
import InventoryOne from '../components/InventoryOne'
import InventoryForm from '../components/InventoryForm';
import InventoryBg from '../components/InventoryBg';

const InventoryPage = () => {
    return (
        <Container>
            <InventoryOne />
            <InventoryForm />
            <InventoryBg />
        </Container>
    )
};

export default InventoryPage;