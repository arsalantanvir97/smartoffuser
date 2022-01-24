import React from 'react';

const MyDocumentView = () => {
  return <section className="board">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <a href="#_"><i className="fas fa-chevron-left arow-l" /></a>
        <h4 className="for-head-h4">My Documents</h4>
        <p className="text-center blue-head">ABC Package</p>
      </div>
    </div>
    <div className="row py-5">
      <div className="col-lg-3">
        {/* <div class="row align-items-center">
              <div class="col-3">
                  <p>Filter</p>
              </div>
              <div class="col-9">
                  <form class="" action="login-home-page.php">
                      <div class="form-group">
                          <select class="form-control smrt-of-inpt" id="exampleFormControlSelect1">
                              <option>select</option>
                              <option>2</option>
                          </select>
                      </div>
                  </form>
              </div>
          </div> */}
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Find Document" />
        </div>
      </div>
      <div className="col-lg-3">
        <div className="row">
          <div className="col-6"><a href="#_" className="btn btn-primary blue-btn3">Upload</a></div>
          {/* <div class="col-6"><a href="#_" class="btn btn-primary blue-btn4" data-dismiss="modal"
                      data-toggle="modal" data-target="#packg">New Folder</a></div> */}
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3">
        <div className="card work-card">
          <div className="card-body text-center">
            <img src="assets/images/icon-pdf.png" alt="" />
            <p>2 Files</p>
            <h4 className="card-title">ABC Folder</h4>
          </div>
          <div className="btn-group2 mr-1 mb-1">
            <button type="button" className="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 23px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
              <a className="dropdown-item" href="events-edit.php">View</a>
              <hr />
              <a className="dropdown-item" href="#" data-dismiss="modal" data-toggle="modal" data-target="#delt">DELETE</a>
              <hr />
              <a className="dropdown-item" href="#">Print</a>
            </div>
          </div>
        </div>
        <p className="text-center">Added on mm/dd/yyyy</p>
      </div>
      <div className="col-lg-3">
        <div className="card work-card">
          <div className="card-body text-center">
            <img src="assets/images/icon-pdf.png" alt="" />
            <p>2 Files</p>
            <h4 className="card-title">ABC Folder</h4>
          </div>
          <div className="btn-group2 mr-1 mb-1">
            <button type="button" className="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 23px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
              <a className="dropdown-item" href="events-edit.php">View</a>
              <hr />
              <a className="dropdown-item" href="#" data-dismiss="modal" data-toggle="modal" data-target="#delt">DELETE</a>
              <hr />
              <a className="dropdown-item" href="#">Print</a>
            </div>
          </div>
        </div>
        <p className="text-center">Added on mm/dd/yyyy</p>
      </div>
      <div className="col-lg-3">
        <div className="card work-card">
          <div className="card-body text-center">
            <img src="assets/images/icon-pdf.png" alt="" />
            <p>2 Files</p>
            <h4 className="card-title">ABC Folder</h4>
          </div>
          <div className="btn-group2 mr-1 mb-1">
            <button type="button" className="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 23px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
              <a className="dropdown-item" href="events-edit.php">View</a>
              <hr />
              <a className="dropdown-item" href="#" data-dismiss="modal" data-toggle="modal" data-target="#delt">DELETE</a>
              <hr />
              <a className="dropdown-item" href="#">Print</a>
            </div>
          </div>
        </div>
        <p className="text-center">Added on mm/dd/yyyy</p>
      </div>
      <div className="col-lg-3">
        <div className="card work-card">
          <div className="card-body text-center">
            <img src="assets/images/icon-pdf.png" alt="" />
            <p>2 Files</p>
            <h4 className="card-title">ABC Folder</h4>
          </div>
          <div className="btn-group2 mr-1 mb-1">
            <button type="button" className="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 23px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
              <a className="dropdown-item" href="events-edit.php">View</a>
              <hr />
              <a className="dropdown-item" href="#" data-dismiss="modal" data-toggle="modal" data-target="#delt">DELETE</a>
              <hr />
              <a className="dropdown-item" href="#">Print</a>
            </div>
          </div>
        </div>
        <p className="text-center">Added on mm/dd/yyyy</p>
      </div>
      <div className="col-lg-3">
        <div className="card work-card">
          <div className="card-body text-center">
            <img src="assets/images/icon-pdf.png" alt="" />
            <p>2 Files</p>
            <h4 className="card-title">ABC Folder</h4>
          </div>
          <div className="btn-group2 mr-1 mb-1">
            <button type="button" className="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 23px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
              <a className="dropdown-item" href="events-edit.php">View</a>
              <hr />
              <a className="dropdown-item" href="#" data-dismiss="modal" data-toggle="modal" data-target="#delt">DELETE</a>
              <hr />
              <a className="dropdown-item" href="#">Print</a>
            </div>
          </div>
        </div>
        <p className="text-center">Added on mm/dd/yyyy</p>
      </div>
      <div className="col-lg-3">
        <div className="card work-card">
          <div className="card-body text-center">
            <img src="assets/images/icon-pdf.png" alt="" />
            <p>2 Files</p>
            <h4 className="card-title">ABC Folder</h4>
          </div>
          <div className="btn-group2 mr-1 mb-1">
            <button type="button" className="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 23px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
              <a className="dropdown-item" href="events-edit.php">View</a>
              <hr />
              <a className="dropdown-item" href="#" data-dismiss="modal" data-toggle="modal" data-target="#delt">DELETE</a>
              <hr />
              <a className="dropdown-item" href="#">Print</a>
            </div>
          </div>
        </div>
        <p className="text-center">Added on mm/dd/yyyy</p>
      </div>
      <div className="col-lg-3">
        <div className="card work-card">
          <div className="card-body text-center">
            <img src="assets/images/icon-pdf.png" alt="" />
            <p>2 Files</p>
            <h4 className="card-title">ABC Folder</h4>
          </div>
          <div className="btn-group2 mr-1 mb-1">
            <button type="button" className="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 23px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
              <a className="dropdown-item" href="events-edit.php">View</a>
              <hr />
              <a className="dropdown-item" href="#" data-dismiss="modal" data-toggle="modal" data-target="#delt">DELETE</a>
              <hr />
              <a className="dropdown-item" href="#">Print</a>
            </div>
          </div>
        </div>
        <p className="text-center">Added on mm/dd/yyyy</p>
      </div>
      <div className="col-lg-3">
        <div className="card work-card">
          <div className="card-body text-center">
            <img src="assets/images/icon-pdf.png" alt="" />
            <p>2 Files</p>
            <h4 className="card-title">ABC Folder</h4>
          </div>
          <div className="btn-group2 mr-1 mb-1">
            <button type="button" className="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 23px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
              <a className="dropdown-item" href="events-edit.php">View</a>
              <hr />
              <a className="dropdown-item" href="#" data-dismiss="modal" data-toggle="modal" data-target="#delt">DELETE</a>
              <hr />
              <a className="dropdown-item" href="#">Print</a>
            </div>
          </div>
        </div>
        <p className="text-center">Added on mm/dd/yyyy</p>
      </div>
      <div className="col-lg-3">
        <div className="card work-card">
          <div className="card-body text-center">
            <img src="assets/images/word-pic.png" alt="" />
            <p>2 Files</p>
            <h4 className="card-title">ABC Folder</h4>
          </div>
          <div className="btn-group2 mr-1 mb-1">
            <button type="button" className="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 23px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
              <a className="dropdown-item" href="events-edit.php">View</a>
              <hr />
              <a className="dropdown-item" href="#" data-dismiss="modal" data-toggle="modal" data-target="#delt">DELETE</a>
              <hr />
              <a className="dropdown-item" href="#">Print</a>
            </div>
          </div>
        </div>
        <p className="text-center">Added on mm/dd/yyyy</p>
      </div>
      <div className="col-lg-3">
        <div className="card work-card">
          <div className="card-body text-center">
            <img src="assets/images/word-pic.png" alt="" />
            <p>2 Files</p>
            <h4 className="card-title">ABC Folder</h4>
          </div>
          <div className="btn-group2 mr-1 mb-1">
            <button type="button" className="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 23px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
              <a className="dropdown-item" href="events-edit.php">View</a>
              <hr />
              <a className="dropdown-item" href="#" data-dismiss="modal" data-toggle="modal" data-target="#delt">DELETE</a>
              <hr />
              <a className="dropdown-item" href="#">Print</a>
            </div>
          </div>
        </div>
        <p className="text-center">Added on mm/dd/yyyy</p>
      </div>
      <div className="col-lg-3">
        <div className="card work-card">
          <div className="card-body text-center">
            <img src="assets/images/word-pic.png" alt="" />
            <p>2 Files</p>
            <h4 className="card-title">ABC Folder</h4>
          </div>
          <div className="btn-group2 mr-1 mb-1">
            <button type="button" className="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 23px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
              <a className="dropdown-item" href="events-edit.php">View</a>
              <hr />
              <a className="dropdown-item" href="#" data-dismiss="modal" data-toggle="modal" data-target="#delt">DELETE</a>
              <hr />
              <a className="dropdown-item" href="#">Print</a>
            </div>
          </div>
        </div>
        <p className="text-center">Added on mm/dd/yyyy</p>
      </div>
      <div className="col-lg-3">
        <div className="card work-card">
          <div className="card-body text-center">
            <img src="assets/images/word-pic.png" alt="" />
            <p>2 Files</p>
            <h4 className="card-title">ABC Folder</h4>
          </div>
          <div className="btn-group2 mr-1 mb-1">
            <button type="button" className="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 23px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
              <a className="dropdown-item" href="events-edit.php">View</a>
              <hr />
              <a className="dropdown-item" href="#" data-dismiss="modal" data-toggle="modal" data-target="#delt">DELETE</a>
              <hr />
              <a className="dropdown-item" href="#">Print</a>
            </div>
          </div>
        </div>
        <p className="text-center">Added on mm/dd/yyyy</p>
      </div>
    </div>
    <div className="row py-4 text-center">
      <div className="col-lg-12">
        <a href="#_" className="btn btn-primary blue-btn2">View All</a>
      </div>
    </div>
  </div>
</section>

};

export default MyDocumentView;
