import React, {Component} from 'react';
import './ FinancialDocuments.scss';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
class FinancialDocuments extends Component {
    render() {
        return (
            <div id='Financial-documents' className='mt-5'>
                <h4 className='mb-5'>Opportunities Documents</h4>
                <div className='row'>
                    <div className='col-md-6 d-flex'>
                        <InsertDriveFileIcon className='icon' /> <p>Loan Report</p>
                    </div>
                    <div className='col-md-6 d-flex'>
                        <InsertDriveFileIcon className='icon' /> <p>Loan Report</p>
                    </div>
                    <div className='col-md-6 d-flex'>
                        <InsertDriveFileIcon className='icon' /> <p>Loan Report</p>
                    </div>
                    <div className='col-md-6 d-flex'>
                        <InsertDriveFileIcon className='icon' /> <p>Loan Report</p>
                    </div>
                    <div className='col-md-6 d-flex'>
                        <InsertDriveFileIcon className='icon' /> <p>Loan Report</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FinancialDocuments;
