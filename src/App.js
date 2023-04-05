import './App.css';
import { IdCard } from './components/IdCard';
import { Greetings } from './components/Greetings';
import { Random } from './components/Random';
import { BoxColor } from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang="es">Vali</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={50} g={255} b={160} />
      <BoxColor r={160} g={0} b={255} />
    </div>
  );
}

export default App;
