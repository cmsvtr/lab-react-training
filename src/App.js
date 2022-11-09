import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Visa from './assets/images/visa.png'
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';

import Dice from './components/Dice';
import Dice1 from './assets/images/dice1.png';
import Dice2 from './assets/images/dice2.png';
import Dice3 from './assets/images/dice3.png';
import Dice4 from './assets/images/dice4.png';
import Dice5 from './assets/images/dice5.png';
import Dice6 from './assets/images/dice6.png';
import Dice0 from './assets/images/dice-empty.png';

function App() {
  return (
    <div className="App">
      
      <div className='iter1'>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div className='iter2'>

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">Sancho</Greetings>
        <Greetings lang="en">Kyle</Greetings>
        <Greetings lang="tp">Yara</Greetings>

      </div>

      <div className= 'iter3'>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        <Random min={3} max={9}/>
        <Random min={5} max={200}/>

      </div>

      <div className='iter4'>

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <BoxColor r={1} g={55} b={12} />
        <BoxColor r={100} g={100} b={100} />
        <BoxColor r={200} g={100} b={0} />

      </div>

      <div className='iter5'>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
          image={Visa} 
        />
      
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
          image={Visa} 
        />
      
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
          image={Visa}  
        />
      </div>

      <div className='iter6'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <div className='iter7'>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
        model: "Audi A3",
        licensePlate: "BE33ER"
        }}
      />

      </div>

      <div className='iter8'>
        <LikeButton />
        <LikeButton />
      </div>

      <div className='iter9'>
        <ClickablePicture
        img= {Dice1}
        imgClicked= {Dice6}
        />

      </div>

      <div className='iter10'>

        <Dice img= {[Dice0,Dice1,Dice2,Dice3,Dice4,Dice5,Dice6]}/>
      
      </div>

      <div className='iter11'>

      <Carousel
        images={[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      
      </div>

      <div className='iter12'>

        <NumbersTable limit={12} />
        <NumbersTable limit={9} />   

      </div>

    </div>
  )
}

export default App;
