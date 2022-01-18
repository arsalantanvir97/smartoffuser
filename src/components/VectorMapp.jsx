import React,{useRef,useEffect} from 'react'
import { VectorMap } from "react-jvectormap";

const VectorMapp = ({printerdata}) => {
  useEffect(() => {
    setInterval(() => {
      if (document.querySelector('.jvectormap-container')) {
        let chart = document.querySelector('.jvectormap-container').firstChild;
        if (Number(chart.getAttribute('height')) !== 600) {
          console.log('setting chart size');
          chart.setAttribute('height', 600);
        }
      }
    }, 5);
  }, []);
    const map = useRef();
console.log('printerdata',printerdata);
const printlocation=   printerdata?.length>0&&
printerdata.map(print=>{
  //   console.log('print.printergeolocation[0]',print.printergeolocation[0]);
    return(
  {
          latLng: [print?.branchid?.geolocation[0],print?.branchid?.geolocation[1]],
          name: print?.branchid?.city,
          value: 20
  })
})
console.log('printlocation',printlocation);
    return (
        <VectorMap
        map={"world_mill"}
        backgroundColor="#FFFF"
        markerStyle={{
          initial: {
            fill: "#FFFF",
            stroke: "#383f47"
          }
        }}
        
        series={{
          markers: [
            {
              attribute: "r",
              scale: [5, 20],
              values: [60, 6, 54],
              normalizeFunction: "polynomial"
            }
          ]
        }}
        regionStyle={{
          initial: {
            fill: "#128da7"
          },
          hover: {
            fill: "#A0D1DC"
          }
        }}
        markers={
            printlocation
         
        //   {
        //     latLng: [24.8607, 67.0011],
        //     name: "WOW",
        //     // value: 30
        //   },
        //   {
        //     latLng: [-33, 12.45],
        //     name: "WAZZZA",
        //     value: 16
        //   }
        }
        ref={map}
        containerStyle={{
          width: "100%",
          height: "100%"
        }}
        containerClassName="map"
      />
    )
}

export default VectorMapp
