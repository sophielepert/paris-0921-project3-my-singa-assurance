import React from 'react';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DescriptionIcon from '@mui/icons-material/Description';
import EcoIcon from '@material-ui/icons/Eco';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import style from './style/SubscriberLeftNavBar.module.scss';

function SubscriberLeftNavBar() {
  return (
    <div className={style.subscriberTitleContainer}>
      <div className={style.subscriberStickyNavBar}>
        <Link to="/subscribers/welcome" className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <HomeIcon />
          </div>
          <p className={style.subscriberText}>Bienvenue</p>
        </Link>

        <Link to="/subscribers/recipients" className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <PeopleAltIcon />
          </div>
          <p className={style.subscriberText}>Mes bénéficiaires</p>
        </Link>

        <button className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <CreditCardIcon />
          </div>
          <p className={style.subscriberText}>Factures & Paiements</p>
        </button>

        <button className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <DescriptionIcon />
          </div>
          <p className={style.subscriberText}>Contrats & Documents</p>
        </button>
        <Link to="/subscribers/actionsolidaire" className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <EcoIcon />
          </div>
          <p className={style.subscriberText}>Actions Solidaires</p>
        </Link>
        <Link to="/subscribers/nouscontacter" className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <QuestionAnswerIcon />
          </div>
          <p className={style.subscriberText}>Nous contacter</p>
        </Link>
      </div>
    </div>
  );
}

export default SubscriberLeftNavBar;
