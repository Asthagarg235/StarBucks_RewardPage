import React from "react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
interface Props{
    open?: boolean;
    title?: string;
    description?: string;
    cancelText?: string;
    deleteText? : string;
    onClose: (open:false) => void;
}
const ConfirmationDialog: React.FC<Props> = ({title, description, cancelText, deleteText, onClose : setOpen}) => {
  return (
    <div className="p-5 bg-gray-200">
        <ExclamationIcon className="text-primary-400"></ExclamationIcon>
        <button onClick={() => setOpen(false) }>
            <XIcon className="w-4 h-5"/>
        </button>
    </div>
);
};

ConfirmationDialog.defaultProps = {
    open: false,
    title: "Are you sure ?",
    description: "Do you really want to delete these records? This process cannot be undone.",
    cancelText: "cancel",
    deleteText:"Delete"
}

export default ConfirmationDialog;