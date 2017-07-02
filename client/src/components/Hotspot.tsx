import * as React from 'react';

interface Props {
    deleteHotspot: () => any;
    moveHotspotUp: () => any;
    moveHotspotDown: () => any;
}

const Hotspot = ({ deleteHotspot, moveHotspotUp, moveHotspotDown}: Props) => (
    <div className="single-hotspot">
        <h3>Nimi tähän</h3>

        <i className="arrow-up fa fa-chevron-up" onClick={() => console.log('up')}></i>
        <i className="fa fa-times delete-hotspot" onClick={() => console.log('delete')}></i>
        
        <ul>
            <li>
                <span>1</span> hours <span>12</span> mins
            </li>
            <li>departureTime</li>
            <li>busNumber</li>
            <li>StopInfo</li>
            <li>Arrival time: </li>
            <li>Distance: </li>
        </ul>
        
        <i className="arrow-down fa fa-chevron-down" onClick={() => console.log('down')}></i>
    </div>
)

export default Hotspot;


{/*<div className="single-hotspot">
    <h3>{this.props.name}</h3>
    <i className="arrow-up fa fa-chevron-up" onClick={() => this.moveUp()}></i>
    <i className="fa fa-times delete-hotspot" onClick={() => this.deleteHotspot()}></i>
    <ul>
        <li>
            <span>{hoursNum}</span> {hours} <span>{minsNum}</span> {mins}
        </li>
        <li>{this.state.departureTime}</li>
        <li>{this.state.busNumber}</li>
        <StopInfo {...this.state.departAddress}/>
        <li>Arrival time: {this.state.arrivalTime}</li>
        <li>Distance: {this.state.distance}</li>
    </ul>
    <i className="arrow-down fa fa-chevron-down" onClick={() => this.moveDown()}></i>
</div>*/}