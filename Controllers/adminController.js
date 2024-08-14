import CustomAPIError from "../Errors/customError.js";
import customer from "../Models/customer.js";
import management from "../Models/management.js";

const admin = async (req, res) => {
  const { user_id, username, role } = req.user;
  if (role == "admin") {
    try {
      const customerData = await customer.find();
      const managementData = await management.find();
      res.status(200).json({ customerData, managementData });
    } catch (error) {
      throw new CustomAPIError(error.message,400)
    }
  }
  if(role=="manager")
  {
    try {
      const customerData = await customer.find({management_id:user_id});
      res.status(200).json({ customerData});
    } catch (error) {
      throw new CustomAPIError(error.message,400)
    }
  }
  if(role=="sales representative")
  {
    try {
      const customerData = await customer.find({management_id:user_id});
      res.status(200).json({ customerData});
    } catch (error) {
      throw new CustomAPIError(error.message,400)
    }
  }
};

export { admin }
