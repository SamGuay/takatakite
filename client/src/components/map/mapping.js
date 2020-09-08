
import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Component} from 'react';
import IconStars from '../forecast/iconStars'
import {connect} from 'react-redux';
import {centerMap, zoomMap, clearSpot} from '../../actions/mapping-actions/mapping-action';
import {bindActionCreators} from 'redux';
import MapPoint from './map_point'





export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.googleMap = React.createRef();
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.state = { width: 0, height: 0 };
  }

  componentWillMount(){
    this.setState({
     center:{ lat:this.props.mapping.lat,
      lng:this.props.mapping.lng},
      zoom:this.props.mapping.zoom
    })
    
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentDidMount() {
    
   
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    var minusHeight=112
    if (window.innerWidth>=770){minusHeight=64}
    this.setState({ width: window.innerWidth, height: (window.innerHeight-minusHeight) });
    
  }
  componentDidUpdate(prevProps){
    if(this.props.mapping!==prevProps.mapping)
    {this.setState({
     center:{ lat:this.props.mapping.lat,
      lng:this.props.mapping.lng},
      zoom:this.props.mapping.zoom
    })
    if(this.props.pathName!==prevProps.pathName){
      
      this.updateWindowDimensions();
    }
      
  }}
  _onBoundsChange = (center, zoom /* , bounds, marginBounds */) => {
    this.setState({
      center:center,
       zoom:zoom
     })
     
     
  }
  
  static defaultProps = {
    center: {
      lat: 47.4277,
      lng: -61.7812
    },
    zoom: 10,
  };
  render() {
  
    return (
    
    //<div className='mapping-position'>
      <div style={{ height: this.state.height, width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCB9f3tWEBTEWJMovDv-Sb8xTTQZ3hORys' }}
          //defaultCenter={this.props.center}
          //defaultZoom={this.props.zoom}
          center={this.state.center}
          zoom={this.state.zoom}
        
          onBoundsChange={this._onBoundsChange}
        >
          {
        this.props.spotBar.map((points,index)=>{
        return <MapPoint key={index} lat={ points.latitude} lng= {points.longitude } latitude={points.latitude} longitude={points.longitude} numberStars={points.star} spot={points.spotName} spotInfo={points} />
      
       })
       }
        </GoogleMapReact>
        
     
      </div>
      
      
      
      
   
   
    
    
 
        
     
     // </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
      centerMap:centerMap,
      zoomMap:zoomMap,
      clearSpot:clearSpot,
      
      
  },
    dispatch)
}

function mapStateToProps(state) {
  return {
    spotBar:state.spotBar,
    mapping:state.map,
    pathName:state.pathName
    

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MapContainer)