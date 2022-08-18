import ItemListContainer from './ItemListContainer/ItemListContainer';
import './Main.css'

const Main = () => {
    return (
        <main className="main">
           <ItemListContainer saludo='Bienvenidos a Altamira' />
        </main>
    );
};
export default Main;