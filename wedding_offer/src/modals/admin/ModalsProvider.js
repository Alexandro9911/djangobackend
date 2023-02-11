import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import '../../styles/admin/modals.sass'
import ModalQuestion from "./ModalQuestion";
import ModalUser from "./ModalUser";
import ModalAnkete from "./ModalAnkete";
import ModalOffer from "./ModalOffer";
import ModalAnswerView from "./ModalStatistic";
export default function ModalsProvider({children}){
  
  const modalsData = useSelector((state) => state.adminModals)
  
  const [questionEdit, setQuestionEdit] = useState(false)
  const [questionView, setQuestionView] = useState(false)
  const [questionCreate, setQuestionCreate] = useState(false)
  
  const [userCreate, setUserCreate] = useState(false)
  const [userEdit, setUserEdit] = useState(false)
  const [userView, setUserView] = useState(false)
  
  const [anketeCreate, setAnketeCreate] = useState(false)
  const [anketeEdit, setAnketeEdit] = useState(false)
  const [anketeView, setAnketeView] = useState(false)
  
  const [offerEdit, setOfferEdit] = useState(false)
  
  const [answersView, setAnswersView] = useState(false)
  
  useEffect(() => {
    setQuestionCreate(modalsData.questionCreate)
    setQuestionEdit(modalsData.questionModalEditState)
    setQuestionView(modalsData.questionModalViewState)
    setUserCreate(modalsData.userModalCreateState)
    setUserEdit(modalsData.userModalEditState)
    setUserView(modalsData.userModalViewState)
    setAnketeCreate(modalsData.anketeModalCreateState)
    setAnketeEdit(modalsData.anketeModalEditState)
    setAnketeView(modalsData.anketeModalViewState)
    setOfferEdit(modalsData.offerModalEditState)
    setAnswersView(modalsData.viewModalAnswersView)
  }, [modalsData])
  
  const getAnketeModalType = () => {
    if(anketeCreate) return 'create'
    if(anketeEdit) return 'edit'
    if(anketeView) return 'view'
  }
  
  const getQuestionModalType = () => {
    if(questionEdit) return 'edit'
    if(questionView) return 'view'
    if(questionCreate) return 'create'
  }
  
  const getUserModalType = () => {
    if(userEdit) return 'edit'
    if(userView) return 'view'
    if(userCreate) return 'create'
  }
  
  return (
    <div>
      <div>
        {(questionEdit || questionView || questionCreate) &&
          <div className="modal-layout">
            <ModalQuestion type={getQuestionModalType()}/>
          </div>
        }
        {(userView || userCreate || userEdit) &&
          <div className="modal-layout">
            <ModalUser type={getUserModalType()}/>
          </div>
        }
        {(anketeCreate || anketeEdit || anketeView) &&
          <div className="modal-layout">
            <ModalAnkete type={getAnketeModalType()} />
          </div>
        }
        { offerEdit &&
          <div className="modal-layout">
            <ModalOffer/>
          </div>
        }
        { answersView &&
          <div className="modal-layout">
            <ModalAnswerView/>
          </div>
        }
      </div>
      {children}
    </div>
  )
}