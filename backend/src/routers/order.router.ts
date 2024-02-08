import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import { OrderModel } from "../models/order.model";
import { OrderStatusEnum } from "../constants/order_status";
import auth from "../middlewares/auth.mid";

const router = Router();
router.use(auth);

router.post(
  "/create",

  expressAsyncHandler(async (req: any, res: any) => {
    const requestOrder = req.body;
    if (requestOrder.items.length <= 0) {
      res.status(HTTP_BAD_REQUEST).send("Cart is Empty");
    }

    await OrderModel.deleteOne({
      user: req.user.id,
      status: OrderStatusEnum.NEW, //if there is already an user
    });

    const newOrder = new OrderModel({ ...requestOrder, user: req.user.id });
    await newOrder.save();
    res.send(newOrder);
  })
);

router.get(
  "/newOrderForCurrentUser",
  expressAsyncHandler(async (req: any, res: any) => {
    const order = await OrderModel.findOne({
      user: req.user.id,
      status: OrderStatusEnum.NEW,
    });
    if (order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
  })
);

router.post(
  "/pay",
  expressAsyncHandler(async (req: any, res: any) => {
    const { paymentId } = req.body;
    const order = await OrderModel.findOne({
      user: req.user.id,
      status: OrderStatusEnum.NEW,
    });
    if (!order) {
      res.status(HTTP_BAD_REQUEST).send("Order Not Found!");
      return;
    }
    order.paymentId = paymentId;
    order.status = OrderStatusEnum.PAYED;
    await order.save();
    res.send(order._id);
  })
);

export default router;
