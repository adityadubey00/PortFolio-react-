// import React, { Suspense, useReducer, useRef, useState } from 'react'
// import {Canvas} from '@react-three/fiber'
// import emailjs from '@emailjs/browser'
// import Fox from '../assets/3d/Fox'
// import Loader from '../components/Loader'

// const Contact = () => {
//     const formRef = useRef(null);
//     const[form,setForm] = useState({name:'',email:'',message:''})
//     const [isLoading,setIsLoading] = useState(false);
//     const handleChange =(e)=>{
//         setForm({...form,[e.target.name]:e.target.value})
//     };
// const handleSubmit =(e) =>{    e.preventDefault(); setIsLoading(true);
//     console.log( import.meta.env.REACT_APP_EMAIL_JS_ID)
//     emailjs.send(
//       import.meta.env.REACT_APP_EMAIL_JS_ID,
//       import.meta.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
//     {
//         from_name: form.name,
//         to_name:"Aditya",
//         from_email:form.email,
//         to_email:'ankitduke732@gmail.com',
//         message:form.message,
//     },
//     import.meta.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
//     ).then(()=>{
//         setIsLoading(false);
//         setForm({name:'',email:'',message:''})
//     }).catch((error)=>{
//         setIsLoading(false);
//         console.log(error);
//     })
// };
// const handleFocus =() =>{}
// const handleBlur =() =>{};
//   return (
// <section className='relative flex lg:flex-row flex-col p-5 max-container bg-gray-800'>
// <div className='flex-1 min-w-[50%] flex flex-col'>
//     <h1 className='text-5xl p-10 m-12 text-gray-400 flex flex-col'>Get In Touch</h1>
//     <form className='w-full flex flex-col gap-12 mt-14' onSubmit={handleSubmit}>

//         <label className='text-black-500 font-semibold text-xl '>Name
//             <input 
//              type='text'
//              name='name'
//              className='input ml-5 w-1/2 rounded-l'
//              placeholder='Aditya'
//              required
//              value={form.name}
//              onChange={handleChange}
//              onFocus={handleFocus}
//              onBlur={handleBlur}
//              >
//             </input>

//         </label>
//         <label className='text-black-500 font-semibold'>E mail
//             <input 
//              type='email'
//              name='email'
//              className='input  ml-5 w-1/2 rounded-l'
//              placeholder='Aditya@gmail.com'
//              required
//              value={form.email}
//              onChange={handleChange}
//              onFocus={handleFocus}
//              onBlur={handleBlur}
//              >
//             </input>

//         </label>
//         <label className='text-black-500 font-semibold'>Your Message
//             <textarea
//             rows={4}
//              name='message'
//              className='textarea'
//              placeholder='Let me know how may I help you '
//              required
//              value={form.message}
//              onChange={handleChange}
//              onFocus={handleFocus}
//              onBlur={handleBlur}
//              >
//             </textarea>

//         </label>
//         <button 
//         type='SUBMIT'
//         className='btn'
//         onFocus={handleFocus}
//         onBlur={handleBlur}>
//             {isLoading ? 'Sending...':'Send Message'}
//         </button>

//     </form>
// </div>
// <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>

// <Canvas 
// camera={{
//     position:[0,0,5]
// }}
// >
// <Suspense fallback ={<Loader/>}>
//     <Fox/>
// </Suspense>
// </Canvas>
// </div>
// </section>
// )
// }

// export default Contact;