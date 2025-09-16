import { useEffect, useState } from "react";
import { Main } from "../../components/Main";
import { Intro } from "../../components/Intro";
import { Modal } from "react-native";

export default function Index() { 
  const [visible, setVisible] = useState(true);
  const activateModal = () => {
    const timer = setTimeout(() => { 
        setVisible(false)
      }, 8000); // Ajusta el tiempo 
    return () => clearTimeout(timer); // Limpia el temporizador al desmontar 
  }
  useEffect(() => {
    activateModal();
  }, [])
  return(
    <> 
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
      >
        <Intro />
      </Modal>
      <Main /> 
    </> 
)}
