import React from 'react'
import './RightSide.css'
import Update from '../Uptade/Update'
import CustomerReview from '../CustomerReview/CustomerReview'

const RightSide = () => {
  return (
    <div className="rightSide">
        <div>
            <h3>Updates</h3>
            <Update />
        </div>
        <div>
            <h3>Customer Review</h3>
            <CustomerReview />
        </div>
    </div>
  )
}

export default RightSide