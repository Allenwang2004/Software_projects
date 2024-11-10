const { order } = require(".");

const router = require("express").Router();
const Order = require("../models").order;
const orderValidation = require("../validation").orderValidation;

router.use((req, res, next) => {
  console.log("order route正在接受一個request...");
  next();
});

// 獲得系統中的所有課程
router.get("/", async (req, res) => {
  try {
    let orderFound = await Order.find({})
      .populate("instructor", ["username", "email"])
      .exec();
    return res.send(orderFound);
  } catch (e) {
    return res.status(5000).send(e);
  }
});

// 用講師id來尋找課程
router.get("/instructor/:_instructor_id", async (req, res) => {
  let { _instructor_id } = req.params;
  let orderFound = await Order.find({ instructor: _instructor_id })
    .populate("instructor", ["username", "email"])
    .exec();
  return res.send(orderFound);
});

// 用學生id來尋找註冊過的課程
router.get("/student/:_student_id", async (req, res) => {
  let { _student_id } = req.params;
  let orderFound = await Order.find({ students: _student_id })
    .populate("instructor", ["username", "email"])
    .exec();
  return res.send(orderFound);
});

// 用課程名稱尋找課程
router.get("/findByName/:name", async (req, res) => {
  let { name } = req.params;
  try {
    let orderFound = await Order.find({ title: name })
      .populate("instructor", ["email", "username"])
      .exec();
    return res.send(orderFound);
  } catch (e) {
    return res.status(500).send(e);
  }
});

// 用課程id尋找課程
router.get("/:_id", async (req, res) => {
  let { _id } = req.params;
  try {
    let orderFound = await Order.findOne({ _id })
      .populate("instructor", ["email"])
      .exec();
    return res.send(orderFound);
  } catch (e) {
    return res.status(500).send(e);
  }
});

// 新增課程
router.post("/", async (req, res) => {
  // 驗證數據符合規範
  let { error } = orderValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (req.user.isStudent()) {
    return res
      .status(400)
      .send("只有講師才能發佈新課程。若你已經是講師，請透過講師帳號登入。");
  }

  let { title, description, price } = req.body;
  try {
    let newOrder = new Order({
      title,
      description,
      price,
      instructor: req.user._id,
    });
    let savedOrder = await newOrder.save();
    return res.send("新課程已經保存");
  } catch (e) {
    return res.status(500).send("無法創建課程。。。");
  }
});

// 讓學生透過課程id來註冊新課程
router.post("/enroll/:_id", async (req, res) => {
  let { _id } = req.params;
  try {
    let order = await Order.findOne({ _id }).exec();
    order.students.push(req.user._id);
    await order.save();
    return res.send("註冊完成");
  } catch (e) {
    return res.send(e);
  }
});

// 更改課程
router.patch("/:_id", async (req, res) => {
  // 驗證數據符合規範
  let { error } = orderValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let { _id } = req.params;
  // 確認課程存在
  try {
    let orderFound = await Order.findOne({ _id });
    if (!orderFound) {
      return res.status(400).send("找不到課程。無法更新課程內容。");
    }

    // 使用者必須是此課程講師，才能編輯課程
    if (orderFound.instructor.equals(req.user._id)) {
      let updatedOrder = await Order.findOneAndUpdate({ _id }, req.body, {
        new: true,
        runValidators: true,
      });
      return res.send({
        message: "課程已經被更新成功",
        updatedOrder,
      });
    } else {
      return res.status(403).send("只有此課程的講師才能編輯課程。");
    }
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.delete("/:_id", async (req, res) => {
  let { _id } = req.params;
  // 確認課程存在
  try {
    let orderFound = await Order.findOne({ _id }).exec();
    if (!orderFound) {
      return res.status(400).send("找不到課程。無法刪除課程。");
    }

    // 使用者必須是此課程講師，才能刪除課程
    if (orderFound.instructor.equals(req.user._id)) {
      await Order.deleteOne({ _id }).exec();
      return res.send("課程已被刪除。");
    } else {
      return res.status(403).send("只有此課程的講師才能刪除課程。");
    }
  } catch (e) {
    return res.status(500).send(e);
  }
});

module.exports = router;
