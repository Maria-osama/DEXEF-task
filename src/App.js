import React from 'react';

import './App.css';
import './components/left-navbar/left-navbar.scss';
import './components/top-navbar/top-navbar.scss';
import './components/sales-invoice/sales-invoice.scss';
import './components/week-summary/week-summary.scss';
import './components/top-customers/top-customers.scss';
import './components/top-customers-list/top-customers-list.scss';

import person1 from './icons/person1.png'
import person2 from './icons/person2.jpg';
import person3 from './icons/person3.jpg';
import person4 from './icons/person4.jpg';
import person5 from './icons/person5.jpg';

import LeftNavbar from './components/left-navbar/left-navbar';
import TopNavbar from './components/top-navbar/top-navbar';
import SalesInvoice from './components/sales-invoice/sales-invoice';
import WeekSummary from './components/week-summary/week-summary';
import TopCustomers from './components/top-customers/top-customers';
import TopCustomersList from './components/top-customers-list/top-customers-list';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <div className="row">
        <div className="col-md-1"><LeftNavbar /></div>
        <div className="col-md-11">

          <div className="row content">
            <div className="col-sm-12 col-md-9">
              <h6 className="table-title float-left">Sales Invoice</h6>
              <button className="add-invoice"><b>+</b> new invoice</button>
              <SalesInvoice />
              <h6 className="table-title">Week Summary</h6>
              <WeekSummary />
            </div>
            <div className="col-sm-12 col-md-3 right-col">
              <div>
                <button>Top Customers</button>
                <button>Top Sales</button>
              </div>
              <div className="row top-customers">

                <TopCustomers name="Noha Atef" img={person2} rank="2" number="12" />
                <TopCustomers name="Ahmed Omar" img={person1} rank="1" number="23" />
                <TopCustomers name="Amr Gamal" img={person3} rank="3" number="10" />
              </div>

              <h5 className="top-customers-title">Top Customers</h5>
              <TopCustomersList img={person1} rank="1" name="Ahmed Omar" amount="23 sale transaction" />
              <TopCustomersList img={person2} rank="2" name="Noha Atef" amount="23 sale transaction" />
              <TopCustomersList img={person3} rank="3" name="Amr Gamal" amount="23 sale transaction" />
              <TopCustomersList img={person4} rank="4" name="Ahmed Omar" amount="23 sale transaction" />
              <TopCustomersList img={person5} rank="5" name="Ahmed Omar" amount="23 sale transaction" />
              <TopCustomersList img={person2} rank="6" name="Ahmed Omar" amount="23 sale transaction" />
            </div>
          </div>



        </div>
      </div>



    </div>
  );
}

export default App;
