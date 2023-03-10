import React from 'react';

export default function TaskModal(props) {
  return (
    <div className="modal fade" id="taskModal" tabIndex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-4" id="taskModalLabel">{props.type} Task:</h1>
            <i className="fa-solid fa-trash pe-2" onClick={props.delete} data-index={props.dataIndex} data-bs-dismiss="modal" />
          </div>
          <form onSubmit={props.submit}>
            <div className='modal-body'>
              <div className="mb-3">
                <label htmlFor='taskName' className='col-form-label' />
                <input type='text' className='form-control' id='editTaskInput' value={props.taskName}
                onChange={props.updateTask} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
