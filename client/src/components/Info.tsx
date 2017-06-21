import * as React from 'react';


const Info = () => (
    <div className="app-info">
        <h2>Welcome to TreBus!</h2>
        <i className="fa fa-close app-info-close"></i>

        <div className="info-container">
            <p>TreBus is an app to help you navigate your bus schedules in the city of Tampere.</p>
            <p>The point is to add Hotspots: places you often visit, like your home, workplace, school...</p>
            <p>
                TreBus uses geolocation to locate you (when possible) and tells you how fast and how to get to
                those hotspots from your current location.
            </p>
            <p>
                If you want you can check out the source code on <a href="https://github.com/anttispitkanen/trebus" target="_blank">GitHub</a>.
            </p>
            <p>-Antti Pitkänen</p>
            <p>(This app is a personal project of mine and not intended for mass use.)</p>
        </div>

    </div>
)

export default Info;