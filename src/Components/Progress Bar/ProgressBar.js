import ProgressBar from 'react-bootstrap/ProgressBar';

function BasicExample({Label, Value, bgColor, barVal}) {
    return (
        <>
            <div className='pt-4'>
                <div className='d-flex'>
                    <div className='text-dark me-auto fw-bold'>{Label}</div>
                    <div className='text-dark fw-bold'>{Value}</div>
                </div>

                <ProgressBar now={barVal} variant={bgColor} />
            </div>
        </>
    );
}

export default BasicExample;