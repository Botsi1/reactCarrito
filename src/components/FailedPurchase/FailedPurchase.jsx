import "./Fail.css";

function FailedPurchase() {
  // Lógica simulando una transacción de compra fallida
  return (
    <div className="form1 form">
      <div className=" form1 info">
        <h2>Compra fallida</h2>
        <p>Lo sentimos, no se pudo procesar su compra.</p>
        <p>
          Puede intentarlo de nuevo o ponerse en contacto con el soporte
          técnico.
        </p>
      </div>
    </div>
  );
}
export default FailedPurchase;
