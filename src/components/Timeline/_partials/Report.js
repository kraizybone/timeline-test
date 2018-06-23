import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFile, faArrowAltCircleDown, faInfoCircle } from '@fortawesome/fontawesome-free-solid';

class Report extends Component {
  getDownloadUrl(id) {
    return `${process.env.REACT_APP_API}/report/${id}/download`;
  }
  render() {
    const { data } = this.props;
    if (data) {
      const { id, name } = data;
      return (
        <section className="report">
          <section className="report__name">
            <span className="icon">
              <FontAwesomeIcon icon={faFile} />
            </span>
            {name}
          </section>
          <a href={this.getDownloadUrl(id)} className="report__btn-download">
            <span className="icon">
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            </span>
          </a>
        </section>
      );
    }
    return (
      <section className="report report-empty">
        <span className="icon">
          <FontAwesomeIcon icon={faInfoCircle} />
        </span>
        Report are generated automatically every Sunday at 11PM
      </section>
    );
  }
}

export default Report;
