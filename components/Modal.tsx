import MuiModal from "@mui/material/Modal"
import { modalState } from "../atoms/modalAtom"
import { useRecoilState } from "recoil"

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState)

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <MuiModal open={showModal} onClose={handleClose}>
        <>
        </>
    </MuiModal>
  )
}

export default Modal