import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'reactstrap';

import { actions, selectors } from 'ducks/alerts';

import style from './Alerts.module.scss';

function Alerts() {
  const alerts = useSelector(selectors.selectMessages);
  const dispatch = useDispatch();

  return (
    <div className={style.alerts}>
      {alerts.map(alert => (
        <Alert key={alert.id} color={alert.color} toggle={() => dispatch(actions.dismissAlert(alert.id))} isOpen>
          {alert.message}
        </Alert>    
      ))}
    </div>
  );
}

export default Alerts;