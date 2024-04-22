import SendingRadio from "../sendingRadio/SendingRadio"
import { useState } from 'react';

const SendingForm = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const valorRadio = (enteredOption) => {
        setSelectedOption(enteredOption);
    }

  return (
    <div>
      <h2>Seleccione el tipo de envío:</h2>
      <SendingRadio valorRadio = {valorRadio} />
      {selectedOption && (
                <p>
                    {selectedOption === "local" ? "No hay recargo" : "Tendrá recargo"}
                </p>
            )}
    </div>
  )
}

export default SendingForm
