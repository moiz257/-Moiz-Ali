import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
const ContactForm = () => {
    const [formData, SetFormData]=useState ({
        name:"",
        email:"",
        message:""
    })
    const [errors, SetErrors]=useState({});
    const [isSending, SetisSending]=useState(false);
    const handlingChange =(e)=>{
        const {name, value}=e.target;
        SetFormData({
            ...formData,
            [name]:value,
        })
    }
const validate =()=>{
    let errors ={};
    if(!formData.name) errors.name="Name is reqiured";
    if(!formData.email) {
        errors.email="Email is reqiured";
    }
    else if(!/\S+@\S+\.\S+/.test(formData.email)){
        errors.email="Email is invalid"
    }
    if(!formData.message) errors.message="Message is reqiured"
   return errors;
}

const handleSubmit=(e)=>{
    e.preventDefault();
    const validationErrors=validate();
    if(Object.keys(validationErrors).length>0){
        SetErrors(validationErrors);
    }
    else{
        SetErrors({});
        SetisSending(true);
        emailjs
        .send(
            "service_r59r7bc",
            "template_wuapxpr",
            formData,
            "rG77r4x5HkLuYozmO"

        )
        .then((response)=>{
            console.log("SUCCESS!", response.status, response.text);
            toast.success("Message sent successfully!");
            SetFormData({name:"", email:"", message:""});
        })
        .catch((error)=>{
            console.log("Failed...",error);
            toast.error("Failed to send message. Please try again later")
        })
        .finally(()=>{
            SetisSending(false)
        })
    }

}
return (
  <div className="mx-auto max-w-3xl p-4" id="contact">
  <Toaster />
  <h2 className="my-8 text-center text-4xl tracking-tighter font-semibold">
    Let's Connect
  </h2>
<motion.form 
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.8, delay:1}}
onSubmit={handleSubmit}>
  <div className=" mb-4">
<input type="text" id="name" name="name" value={formData.name} placeholder="Name"
onChange={handlingChange}
className=" mb-8 w-full appearance-none rounded-lg border border-gray-900
bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none " />
{errors.name && (
  <motion.p 
  initial={{opacity:0}}
  whileInView={{opacity:1}}
  aria-live="polite"
  className=" text-sm text-pink-700">{errors.name}</motion.p>
)}

  </div>
  <div className=" mb-4">
<input type="email" id="email" name="email" value={formData.email} placeholder="Email"
onChange={handlingChange}
className=" mb-8 w-full appearance-none rounded-lg border border-gray-900
bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none " />
{errors.name && (
  <motion.p 
  initial={{opacity:0}}
  whileInView={{opacity:1}}
  aria-live="polite"className=" text-sm text-pink-700">{errors.email}</motion.p>
)}

  </div>
  <div className=" mb-4">
<textarea type="message" id="message" name="message" value={formData.message} placeholder="Message"
onChange={handlingChange}
className=" mb-8 w-full appearance-none rounded-lg border border-gray-900
bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none " rows="4"/>
{errors.name && (
  <motion.p 
  initial={{opacity:0}}
  whileInView={{opacity:1}}
  aria-live="polite"className=" text-sm text-pink-700">{errors.message} </motion.p>
)}

  </div>
  <button type="submit" className={` mb-8 w-full rounded px-4 py-2 font-semibold text-slate-950 hover:bg-yellow-500
 bg-yellow-400 text-sm ${isSending ? "cursor-not-allowed opacity-50":""} `} 
 disabled={isSending}>
  {isSending ? "Sending..." :"Send"}
 </button>
</motion.form>
</div>
  );
};

export default ContactForm;