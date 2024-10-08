import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const ResultRef = forwardRef(function Modal({selectedItem}, ref) {
  return (
    <motion.dialog ref={ref} className='moreInfo'>
        <div className="infoContent">
            <h2>Unlock the Secrets of Your Chosen Exercise</h2>
            <p>{selectedItem?.description}</p>
            <p><span className="infoContentHeaders">Level:</span> {selectedItem?.level}</p>
            <p><span className="infoContentHeaders">Equipment used:</span> {selectedItem?.equipment_type}</p>
            <form method='dialog'>
                <button className='closeMoreInfo'> Close </button>
            </form>
        </div>
    </motion.dialog>
  )
})

export default ResultRef