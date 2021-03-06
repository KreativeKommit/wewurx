import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Styles from "./qutoes.module.scss";
import MainPage from "../../components/quotes/main-page";
import ViewQuote from "../../components/quotes/view-quote";
import AddQuote from "../../components/quotes/add-quote";

const Quotes = (props) => {
  return (
    <div className={`${Styles.quotes} page`}>
      <Switch>
        <Route path='/jobs/quotes' exact component={MainPage} />
        <Route path='/jobs/quotes/:id/view' component={ViewQuote} />
        <Route path='/jobs/quotes/add' component={AddQuote} />
        <Redirect to='/jobs/quotes' />
      </Switch>
    </div>
  );
};

export default Quotes;
