import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { baseURL } from '../utils/api';
import VectorMapp from '../components/VectorMapp';
import { Link } from "react-router-dom";

const LocatePrinter = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
const [machines, setmachines] = useState([])
useEffect(() => {
  onSubmitHandler()
}, [])
  const onSubmitHandler = async () => {
    try {
      const res = await axios.get(
        `${baseURL}/requestmachine/getRequestMachine`,
      
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        }
      );
      if (res?.status == 201) {
        console.log('res',res?.data);
        setmachines(res?.data?.requestmachine)
      }
    } catch (error) {
    
    }
  };
  return (
    <section className="board">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Link to="/Dashboard">
              <i className="fas fa-chevron-left arow-l" />
            </Link>
            <h4 className="for-head-h4">Locate Printers</h4>
          </div>
        </div>
        <div
                              // className="row text-center"
                              style={{ width: "100%", height: "100vh" }}
                            >
          <VectorMapp  printerdata={machines} />
        </div>
        
      </div>
    </section>
  );
};

export default LocatePrinter;
