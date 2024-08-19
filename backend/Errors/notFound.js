const notFound = (req,res) =>
{
   return res.status(404).json({msg:"Route did not found"})
}

export default notFound