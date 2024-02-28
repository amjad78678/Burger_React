import {render,screen} from '@testing-library/react'
import Header  from '../Header.jsx'
import { Provider } from 'react-redux';
import appStore from '../../redux/appStore';
import { BrowserRouter } from 'react-router-dom';


it('Should load header component with a login button',()=>{

    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
     
     const header=screen.findByText('Instamart')


     
})