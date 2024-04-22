import { useState } from 'react';
import TableInput from '../tableInput/TableInput';

const TableForm = () => {
    const [table, setTable] = useState ("")

    const valorInput = (enteredInputValue) => {
        if (enteredInputValue === '4') {
            setTable('Mesa correcta');
          } else {
            setTable('Mesa inestable');
          }
        };
    
  return (
    <div>
        <h2> Ingrese la cantidad de patas que tendrá la mesa </h2>
      <TableInput valorInput={valorInput}/>
      <p>{table}</p>
    </div>
  )
}

export default TableForm
