import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useOrder } from "../../context/CukroContext";
import OrderSummaryRow from "./OrderSummaryRow";

const OrderSummary = ({ handleNext }) => {
  const { order, setOrder } = useOrder();

  const updateAmount = (id, updatedAmount) => {
    const updatedOrder = order.map((orderItem) => {
      if (orderItem._id === id) {
        return { ...orderItem, amount: updatedAmount };
      }
      return orderItem;
    });
    setOrder(updatedOrder);
  };

  const removeOrderItem = (id) => {
    const updatedOrder = order.filter((item) => item._id !== id);
    setOrder(updatedOrder);
  };

  return (
    <>
      {order.map((item, index) => (
        <OrderSummaryRow key={index} item={item} updateAmount={updateAmount} removeOrderItem={removeOrderItem} />
      ))}
      <Box sx={{ display: "flex", justifyContent: "center" }} mt={5}>
        <Button variant="contained" mt="23px" onClick={handleNext}>
          Ďalej
        </Button>
      </Box>
    </>
  );
};

export default OrderSummary;
