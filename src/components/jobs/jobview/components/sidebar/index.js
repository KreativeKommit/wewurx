import React from "react";
import Styles from "../../../jobs/components/secondaryjobpage/components/sidebar/sidebar.module.scss";
import CustomStyles from "./sidebar.module.scss";
import { NavLink as Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className={`${Styles.sidebar} ${CustomStyles.sidebar}`}>
      <Link
        to='/'
        className={`${Styles.sidebar__link} ${CustomStyles.sidebar__link}`}
      >
        {" "}
        <i className='fa fa-arrow-left fa-lg'></i>
        <span>Job</span>
      </Link>
      <Link className={`${Styles.sidebar__button}`} to='/jobs/view/id/'>
        Job
      </Link>
      <Link
        to='/jobs/view/id/costitems'
        className={`${Styles.sidebar__button}`}
      >
        Cost Items
      </Link>
      <Link
        to='/jobs/view/id/projectjobs'
        className={`${Styles.sidebar__button}`}
      >
        Project Jobs
      </Link>
      <Link className={`${Styles.sidebar__button}`} to='/jobs/view/id/forms'>
        Forms
      </Link>
      <Link
        className={`${Styles.sidebar__button}`}
        to='/jobs/view/id/filesandnotes'
      >
        Files and notes
      </Link>
      <Link
        className={`${Styles.sidebar__button}`}
        to='/jobs/view/id/jobActivity'
      >
        Job activity
      </Link>
      <Link
        to='/invoices'
        className={`${Styles.sidebar__buttonBottom} ${CustomStyles.sidebar__link}`}
      >
        Go to Invoices
      </Link>
      <Link
        className={`${Styles.sidebar__buttonBottom} ${CustomStyles.sidebar__link}`}
        to='/job/view/id'
      >
        Job Report
      </Link>
      <Link
        className={`${Styles.sidebar__buttonBottom} ${CustomStyles.sidebar__link}`}
        to='/job/view/id'
      >
        Convert to Quote
      </Link>
      <button
        className={`${Styles.sidebar__buttonBottom} ${CustomStyles.sidebar__link}`}
      >
        Delete
      </button>
    </div>
  );
};

export default SideBar;
