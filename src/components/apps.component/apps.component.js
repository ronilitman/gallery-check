import React from 'react';
import { connect } from 'react-redux';
import { startSetPics } from '../../actions/apps'
import selectPics from '../../selectors/picsSelector';

export class AppsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ifchecked: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      ifchecked: event.target.checked
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row panel">
          <div className="col-7 col-lg-4 ">
            <label> greyscale version</label>
            <input type="checkbox" onChange={this.handleInputChange} className="checkbox" />
          </div>
          <div className="col-5 col-lg-4">
            <button onClick={this.props.startSetPics}>loade more</button>
          </div>
        </div>
        <div className="row">
          {
            this.props.pics.map((qu) => {
              return <div key={Math.random()} className="col-md-4 list-item" >
                <div className="row ">
                  <div className="col-sm-12 ">
                    <div className="flex ">
                      <img src={`https://picsum.photos/id/${qu.id}/300/300?${this.state.ifchecked ? 'grayscale' : ''}`} />
                      <h3></h3></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 ">
                    <h5>{qu.author}</h5>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    pics: selectPics(state.apps, ownProps.searchTxt)
  };
};

const mapDispatchToProps = (dispatch) => ({
  startSetPics: () => dispatch(startSetPics())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppsComponent);
