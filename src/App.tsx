import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./globals";
import Modal from 'react-modal';
import { useContext, useState } from "react";
import { NewTransactionModal } from "./components/newTransactionModal";
import { TransactionsProvider} from './hooks/useTransactions'

Modal.setAppElement('#root');
export function App() {
  
  const [isNewTransactionModalOpen,setIsNewTransacionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransacionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransacionModalOpen(false);
  }

  return (
    <div className="App">
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard/>
        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
        <GlobalStyle/>
      </TransactionsProvider>
      
    </div>
  );
}

