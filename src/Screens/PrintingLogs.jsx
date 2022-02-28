import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import moment from "moment";
import Pagination from "../components/Padgination";

const PrintingLogs = () => {
  const [page, setPage] = useState(1);

  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const [prints, setprints] = useState([]);
  const [rerender, setrerender] = useState(true);
  const [paid, setpaid] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    getPrintsLogs();
  }, [page, perPage, from, to, status, searchString, rerender]);

  const getPrintsLogs = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/print/Printlogs/${userInfo?._id}`,
        method: "GET",
        params: {
          page,
          perPage,
          searchString,
          from,
          to,
          status,
          paid: false,
          id: userInfo?._id
        },
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });

      console.log("res", res);
      setprints(res.data?.print);
    } catch (err) {
      console.log("err", err);
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
            <h4 className="for-head-h4">Printing Logs</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 text-left">
            <div className="fields">
              <div className="f_wrap">
                <span>Show</span>
                <select
                  id="show_entries"
                  value={perPage}
                  onChange={(e) => {
                    setPerPage(e.target.value);
                    setPage(1);
                  }}
                >
                  <option value={10}>10</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                  <option value={150}>150</option>
                </select>
                <span>Entries</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-lg-right text-left">
            <div className="fields">
              <div className="f_wrap">
                <input
                  type="text"
                  name
                  id="table_filter"
                  placeholder="Search"
                  value={searchString}
                  onChange={(e) => {
                    setSearchString(e.target.value);
                    setPage(1);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      getPrintsLogs();
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table" style={{backgroundColor:'white'}}>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Print ID</th>
                <th>Printer ID</th>
                <th>Document Name</th>
                <th>No of Pages</th>
                <th>Cost Per Page</th>
                <th>Print Location</th>
                <th>Print Date</th>
                <th>Type</th>
                <th>Total Amount</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {prints?.docs?.length > 0 &&
                prints?.docs?.map((print, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{print?._id}</td>
                    <td>{print?.requestformachine?._id}</td>
                    <td>{print?.documentname}</td>
                    <td>{print?.pages}</td>
                    <td>${print?.costperpage}</td>
                    <td> {print?.requestformachine?.branchid?.address}</td>
                    <td> {moment.utc(print?.createdAt).format("LL")}</td>
                    <td>{print?.type}</td>
                    <td>${print?.totalcost}</td>
                    <td>
                      <i className="fa fa-ellipsis-v" aria-hidden="true" />
                      <ul className="onhover">
                        <li>
                          <Link to={`PrintingLogsView${print?._id}`}>View</Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {prints?.docs?.length > 0 && (
          <Pagination
            totalDocs={prints?.totalDocs}
            totalPages={prints?.totalPages}
            currentPage={prints?.page}
            setPage={setPage}
            hasNextPage={prints?.hasNextPage}
            hasPrevPage={prints?.hasPrevPage}
          />
        )}
      </div>
    </section>
  );
};

export default PrintingLogs;
