import React, { Component } from "react"
import { bindActionCreators} from "redux"
import {connect} from "react-redux"
import {getLaptops} from "./actions/laptops"


class LaptopList extends Component {
    componentWillMount() {
       this.props.getLaptops()
    }

    render() {
        const { loading, laptops } = this.props
       
       if (loading) {
           return <div>Loading....</div>
        }
        return (
            <div>
                <table className="table">
                    <thead className="th thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Processor</th>
                            <th>Processor Score</th>
                            {/* <th>Graphics Adapter</th> */}
                            <th>Memory</th>
                            <th>Screen Size</th>
                            <th>Screen Ratio</th>
                            <th>Screen Resolution</th>
                            <th>Screen Density</th>
                            <th>Weight</th>
                            <th>Storage</th>
                            <th>Operating System</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            laptops.map(laptop => {
                                return <tr key={laptop.id}>
                                    <td><a target="blank_" href={laptop.link}>{laptop.name}</a></td>
                                    <td>{laptop.processor}</td>
                                    <td>{laptop.processor_score}</td>
                                    {/* <td>{laptop.graphics_adapter}</td> */}
                                    <td>{laptop.memory_mb}</td>
                                    <td>{laptop.screen_size}</td>
                                    <td>{laptop.screen_ratio}</td>
                                    <td>{`${laptop.screen_resolution_w}x${laptop.screen_resolution_h}`}</td>
                                    <td>{laptop.screen_density_ppi}</td>
                                    <td>{laptop.weight_kg}</td>
                                    <td>{laptop.storage_gb}</td>
                                    <td>{laptop.operating_system}</td>
                                    <td><a className="btn btn-primary" href={`https://www.amazon.co.uk/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=${laptop.name.split(" ").join("+")}`} target="blank_">Search</a></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps (state) {
    console.log(state)
    return {
        loading: state.laptops.loading,
        laptops: state.laptops.arr
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getLaptops
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(LaptopList);

