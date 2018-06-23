import React from 'react';

export default ({ label }) => {
  return (
    <section className="creatives__header">
      <section className="creatives__row">
        <section className="creatives__cell creatives__cell-name">{label}</section>
        <section className="creatives__cell">psr</section>
        <section className="creatives__cell">views</section>
        <section className="creatives__cell">cpv</section>
      </section>
    </section>
  );
};
