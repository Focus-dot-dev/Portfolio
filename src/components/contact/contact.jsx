import { useState, useEffect } from 'react'
import React from 'react'
import { Toaster, toast } from 'sonner'
import axios from 'axios'
import "./contact.css"
import { Modal } from 'antd'

const Contact = () => {

  const [open, setOpen] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [workEmail, setWorkEmail] = useState("")
  const [comment, setComment] = useState("")

  const [bookings, setBookings] = useState([])

  const validateInputs = async () => {
    if (firstName.trim() === "" || lastName.trim() === "" || workEmail.trim() === "" || comment.trim() === "") {
      toast.error("All fields are required")
    } else {
      const { data } = await axios.post("http://localhost:4000/book_us", {
        firstName,
        lastName,
        workEmail,
        comment
      })


      if (data.status === false) {
        toast.error(data.msg)
      } else {
        toast.success(data.msg)
        setOpen(false)
      }
    }
  }
  const AddBooking = (e) => {
    e.preventDefault()
    validateInputs()

  }

  

  const openModal = () => {
    setOpen(true)
  }


  const closeModal = () => {
    setOpen(false)
  }

  const fetchBookings = async () => {
    const response = await axios.get("http://localhost:4000/messages")
    console.log(response);

    if (response.data.status === false) {
      toast.error(response.data.msg)
    } else {
      setBookings(response.data.msg)
      console.log(response.data.msg);

    }
  }
  useEffect(() => {
    fetchBookings()
  }, [])

  return (
    <>
      <section>
        <Toaster richColors position="top-right" />
        <button onClick={openModal} className='bookingbtn rounded-md bg-orange-400 w-20'> Book Me</button>
        <Modal open={open} onCancel={closeModal} onOk={AddBooking} footer={null}>
          <form action="" onSubmit={AddBooking} className='modalform p-2'>
            <Input type='text' placeholder='First Name' className='bookingInput m-2' onChange={(e) => { setFirstName(e.target.value) }} />
            <Input type='text' placeholder='Last Name' className='bookingInput m-2' onChange={(e) => { setLastName(e.target.value) }} />
            <Input type='email' placeholder='Work Email' className='bookingInput m-2' onChange={(e) => { setWorkEmail(e.target.value) }} />

            <textarea placeholder='Message' className='bookingContentInput w-full rounded-md resize-none outline-none bg-white m-2' onChange={(e) => { setComment(e.target.value) }}></textarea>
            <button type='input' className='bookBtn bg-orange-400 rounded-lg p-2' onSubmit={closeModal}> Drop Message</button>
          </form>
        </Modal>


      </section>
    </>
  )
}

export default Contact