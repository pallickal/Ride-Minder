import React from 'react';

const Home = React.createClass({
  render: function() {
    return (
      <div>
        Welcome to Ride Minder! A place to track, organize, and plan for the maintenance, repair, and build of your vehicle.
        <ul>
          <li>Calculate fuel economy and running costs</li>
          <li>Set a maintenance schedule and get reminders when due</li>
          <li>File expenses under documentation for maintenance, repair, and build items</li>
          <li>Document receipts and work progression with photo and video</li>
          <li>Bookmark/cache online references and PDF manuals while planning maintenance, repairs, or builds</li>
          <li>Plan and estimate future maintenance, repair, and build costs</li>
        </ul>
      </div>
    );
  }
});

export default Home;
