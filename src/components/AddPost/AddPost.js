import React,{useState} from "react";
import AddButton from "./AddButton";
import PostModal from "./Modal/PostModal";

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AddButton handleOpen={handleOpen} />
      <PostModal open={open}  handleClose={handleClose} />
    </>
  );
};

export default AddPost;
