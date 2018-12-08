import React, { PureComponent } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toNomalTime } from '../../utils/transformTime';
import Spinner from '../spinner';

export default class HomePageList extends PureComponent {
  // TODO: getMsgOnSocket

  render() {
    const { homePageList } = this.props;
    const listItems = homePageList.map((data, index) => (
      <li key={index}>
        <Link to={data.type === 'group' ? `/group_chat/${data.group_id}` : `/private_chat/${data.from_user}`}>
          <img src={data.type === 'group' ? data.group_avator : data.avator} alt={data.type === 'group' ? '群头像' : '用户头像'} className="img" />
          {/* {data.unread &&<span className={data.type === 'group' ? "group-unread" :"private-unread" }>{data.unread}</span>} */}
          <div className="content">
            <div className="title">
              {data.type === 'group' ? data.group_name : data.name}
              <span>{toNomalTime(data.time)}</span>
            </div>
            <div className="message">{data.message}</div>
          </div>
        </Link>
      </li>
    ));
    return (
      <div className="home-page-list-wrapper">
        {/* TODO */}
        {/* {this.state.showSpinner && <Spinner /> } */}
        <ul>{listItems}</ul>
      </div>
    );
  }
}

HomePageList.propTypes = {
  homePageList: PropTypes.array
};

HomePageList.defaultProps = {
  homePageList: []
};
