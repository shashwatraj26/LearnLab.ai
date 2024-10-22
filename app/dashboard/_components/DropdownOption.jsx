"use client"
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "/components/ui/dropdown-menu"
import { HiOutlineTrash } from 'react-icons/hi2'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "/components/ui/alert-dialog"
  

function DropdownOption({children,handleOnDelete}) {
    const [openAlert,setOpenAlert]=useState(false);

  return (
    <div>
    
</div>

  )
}

export default DropdownOption