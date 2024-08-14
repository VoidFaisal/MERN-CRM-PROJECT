const notFound = (req,res) =>
{
    res.status(404).json({msg:"Route did not found"})
}

export default notFound