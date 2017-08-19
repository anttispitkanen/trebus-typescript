import * as React from 'react';

// interface Props {
//     addHotspot: () => any;
// }

export default class AddHotspot extends React.Component<any, any> { // FIXME
    constructor() {
        super();
        this.state = {
            formOpen: false,
            name: '',
            address: ''
        }
    }

    validateHotspot() {
        return true;
    }

    tryAddHotspot() {
        if (this.state.name.length < 2 || this.state.address.length < 4) {
            alert('Try to come up with a longer name and address! :D');
            return;
        }

        const { name, address } = this.state;
        const newHotspot = {
            name,
            address,
            coords: undefined,
            latitude: undefined,
            longitude: undefined
        }

        this.props.addHotspot(newHotspot);

    }

    cancel() {
        this.setState({
            formOpen: false,
            name: '',
            address: ''
        })
    }

    render() {
        if (!this.state.formOpen) {
            return (
                <div className="single-hotspot add-hotspot">
                    <div onClick={() => this.setState({ formOpen: true })}>
                        <i className="fa fa-plus" style={{ color: 'red', fontSize: '3rem' }} />
                    </div>
                </div>
            )
        }

        return (
            <div className="single-hotspot add-hotspot-form">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.tryAddHotspot();
                }}>
                    <input
                        ref="name"
                        type="text"
                        placeholder="Hotspot name"
                        value={this.state.name}
                        onChange={(e) => this.setState({
                            name: e.target.value
                        })}
                    />
                    <br />
                    <input
                        ref="address"
                        type="text"
                        placeholder="Address"
                        value={this.state.address}
                        onChange={(e) => this.setState({
                            address: e.target.value
                        })}
                    />
                    <br />
                    <input
                        type="button"
                        value="Cancel"
                        className="button cancel"
                        onClick={() => this.cancel()}
                    />
                    <input
                        type="submit"
                        value="Add"
                        className="button"
                    />
                </form>
            </div>
        )
    }
}
